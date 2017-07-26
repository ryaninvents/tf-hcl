import makeBaseLexer from "./moo-rules";

export interface Token {
  type: string;
  value: string;
  line: number;
  col: number;
  lineBreaks?: number;
  offset: number;
  size: number;
}

export interface HeredocState {
  indented: boolean;
  tag: string;
  line: number;
  col: number;
}

export interface MooState {
  line: number;
  col: number;
  state: any;
}

export interface Info {
  mooState: MooState;
  mooStack: any[];
  heredocStack: HeredocState[];
  lastToken: Token | null;
}

/**
 * Given a tag representing an indented heredoc, return a RegExp that will detect the
 * end of the heredoc string.
 */
function getRegexForHeredoc(tag: string) {
  return new RegExp(`^${tag}(?:(?=\n)|$)`);
}

/**
 * Given a tag representing an indented heredoc, return a RegExp that will detect the
 * end of the heredoc string.
 */
function getRegexForIndentedHeredoc(tag: string) {
  return new RegExp(`^\\s*${tag}(?:(?=\n)|$)`);
}

export default class HclLexer {
  private moo: any;
  private heredocStack: HeredocState[] = [];
  private lastToken: Token | null = null;

  constructor(input?: string) {
    this.moo = makeBaseLexer();
    this.reset(input);
  }

  /**
   * Return an object describing lexer state.
   *
   * @override
   */
  public save(): Info {
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
  public reset(chunk: string, info?: Info) {
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
  public next(): Token {
    if (this.heredocStack.length) {
      const text = this.moo.buffer.slice(this.moo.index);
      const heredoc = this.heredocStack[this.heredocStack.length - 1];
      if (this.lastToken && this.lastToken.type === "newline") {
        const { line, col, index: offset } = this.moo;
        if (heredoc.indented) {
          const match = text.match(getRegexForIndentedHeredoc(heredoc.tag));
          if (match) {
            const size = match[0].length;
            this.moo.index += size;
            this.moo.popState();
            this.heredocStack.pop();
            this.moo.line++;
            this.moo.col = 1;
            return {
              type: "endHeredoc",
              value: match[0],
              line,
              col,
              offset,
              lineBreaks: 0,
              size
            };
          }
        } else {
          const match = text.match(getRegexForHeredoc(heredoc.tag));
          if (match) {
            const size = match[0].length;
            this.moo.index += size;
            this.moo.popState();
            this.heredocStack.pop();
            this.moo.line++;
            this.moo.col = 1;
            return {
              type: "endHeredoc",
              value: match[0],
              line,
              col,
              offset,
              lineBreaks: 0,
              size
            };
          }
        }
      }
    }
    const nextToken = this.moo.next();

    if (nextToken) {
      switch (nextToken.type) {
        case "beginHeredoc":
          nextToken.tag = nextToken.value.slice(2).trim();
          this.heredocStack.push({
            tag: nextToken.tag,
            indented: false,
            line: nextToken.line,
            col: nextToken.col
          });
          break;
        case "beginIndentedHeredoc":
          nextToken.tag = nextToken.value.slice(3).trim();
          this.heredocStack.push({
            tag: nextToken.tag,
            indented: true,
            line: nextToken.line,
            col: nextToken.col
          });
          break;
        default:
          break;
      }
    }

    this.lastToken = nextToken;

    return nextToken;
  }

  /**
   * Format an error for display.
   *
   * @override
   */
  public formatError(token: Token) {
    return this.moo.formatError(token);
  }

  /**
   * Check to see if this lexer can handle tokens with the given name.
   *
   * @override
   */
  public has(tokenType: string): boolean {
    return tokenType === "endHeredoc" || this.moo.has(tokenType);
  }
}
