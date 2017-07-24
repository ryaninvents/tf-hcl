import makeBaseLexer from "./moo-rules";

export type Token = {
  type: string;
  value: string;
  line: number;
  col: number;
};

export type HeredocState = {
  indented: boolean;
  tag: string;
  line: number;
  col: number;
};

export type MooState = {
  line: number;
  col: number;
  state: any;
};

export type Info = {
  mooState: MooState;
  mooStack: Array<any>;
  heredocStack: HeredocState[];
  lastToken: Token | null;
};

/**
 * Given a tag representing an indented heredoc, return a RegExp that will detect the
 * end of the heredoc string.
 */
function getRegexForIndentedHeredoc(tag: string) {
  return new RegExp(`^\\s*${tag}\n`);
}

export default class HclLexer {
  moo: any;
  heredocStack: HeredocState[] = [];
  lastToken: Token | null = null;

  constructor(input: string) {
    this.moo = makeBaseLexer();
    this.reset(input);
  }

  /**
   * Return an object describing lexer state.
   *
   * @override
   */
  save(): Info {
    return {
      mooState: this.moo.save(),
      mooStack: this.moo.stack,
      heredocStack: this.heredocStack,
      lastToken: this.lastToken
    };
  }

  /**
   * Reset the lexer to the given state.
   *
   * @override
   */
  reset(chunk: string, info?: Info) {
    if (info) {
      const { mooState, mooStack, heredocStack } = info;
      this.heredocStack = heredocStack;
      this.moo.reset(chunk, mooState);
      this.moo.stack = mooStack;
      this.lastToken = info.lastToken;
      return;
    }
    this.moo.reset(chunk);
  }

  /**
   * Get the next token from the lexer.
   *
   * @override
   */
  next(): Token {
    if (this.heredocStack.length) {
      const text = this.moo.buffer.slice(this.moo.index);
      const heredoc = this.heredocStack[this.heredocStack.length - 1];
      if (this.lastToken && this.lastToken.type === "newline") {
        const { line, col } = this.moo;
        if (heredoc.indented) {
          const match = text.match(
            getRegexForIndentedHeredoc(heredoc.tag)
          );
          if (match) {
            // Increment moo index by `length + 1` to account for newline.
            this.moo.index += match[0].length + 1;
            this.moo.popState();
            this.heredocStack.pop();
            this.moo.line++;
            this.moo.col = 1;
            return {
              type: "endHeredoc",
              value: match[0],
              line,
              col
            };
          }
        } else {
          const endTag = `${heredoc.tag}\n`;
          if (text.indexOf(endTag) === 0) {
            // Increment moo index by `length + 1` to account for newline.
            this.moo.index += endTag.length + 1;
            this.moo.popState();
            this.heredocStack.pop();
            this.moo.line++;
            this.moo.col = 1;
            return {
              type: "endHeredoc",
              value: endTag,
              line,
              col
            };
          }
        }
      }
    }
    const nextToken = this.moo.next();

    if (nextToken) switch (nextToken.type) {
      case "beginHeredoc":
        this.heredocStack.push({
          tag: nextToken.value.slice(2).trim(),
          indented: false,
          line: nextToken.line,
          col: nextToken.col
        });
        break;
      case "beginIndentedHeredoc":
        this.heredocStack.push({
          tag: nextToken.value.slice(3).trim(),
          indented: true,
          line: nextToken.line,
          col: nextToken.col
        });
        break;
      default:
        break;
    }

    this.lastToken = nextToken;

    return nextToken;
  }

  /**
   * Format an error for display.
   *
   * @override
   */
  formatError(token: Token) {
    return this.moo.formatError(token);
  }

  /**
   * Check to see if this lexer can handle tokens with the given name.
   *
   * @override
   */
  has(tokenType: string): boolean {
    return tokenType === "endHeredoc" || this.moo.has(tokenType);
  }
}
