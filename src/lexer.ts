import makeBaseLexer from './moo-rules';

export type Token = {
  type: string,
  value: string,
  line: number,
  col: number,
};

export type HeredocState = {
  indented: boolean,
  tag: string,
  line: number,
  col: number,
};

export type MooState = {
  line: number,
  col: number,
  state: any,
};

export type Info = {
  mooState: MooState,
  mooStack: Array<any>,
  heredocStack: HeredocState[],
  lastToken: Token | null,
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
  heredocStack: HeredocState[];
  lastToken: Token | null = null;

  constructor() {
    this.moo = makeBaseLexer();
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
      lastToken: this.lastToken,
    };
  }

  /**
   * Reset the lexer to the given state.
   *
   * @override
   */
  reset(chunk: string, info: Info) {
    const {mooState, mooStack, heredocStack} = info;
    this.heredocStack = heredocStack;
    this.moo.reset(chunk, mooState);
    this.moo.stack = mooStack;
    this.lastToken = info.lastToken;
  }

  /**
   * Get the next token from the lexer.
   *
   * @override
   */
  next(): Token {
    if (this.heredocStack.length) {
      const heredoc = this.heredocStack[this.heredocStack.length - 1]
      if (this.lastToken.type === 'newline') {
        const {line, col} = this.moo;
        if (heredoc.indented) {
          const match = this.moo.buffer.match(getRegexForIndentedHeredoc(heredoc.tag))
          if (match) {
            this.moo.buffer = this.moo.buffer.slice(match[0].length);
            this.moo.popState();
            this.heredocStack.pop();
            this.moo.line++;
            this.moo.col = 1;
            return {
              type: 'endHeredoc',
              value: match[0],
              line,
              col,
            };
          }
        } else {
          const endTag = `${heredoc.tag}\n`
          if (this.moo.buffer.indexOf(endTag) === 0) {
            this.moo.buffer = this.moo.buffer.slice(endTag.length);
            this.moo.popState();
            this.heredocStack.pop();
            this.moo.line++;
            this.moo.col = 1;
            return {
              type: 'endHeredoc',
              value: endTag,
              line,
              col,
            }
          }
        }
      }
    }
    const nextToken = this.moo.next();

    switch (nextToken.type) {
      case 'beginHeredoc':
        this.heredocStack.push({
          tag: nextToken.value.slice(2),
          indented: false,
          line: nextToken.line,
          col: nextToken.col,
        });
        break;
      case 'beginIndentedHeredoc':
        this.heredocStack.push({
          tag: nextToken.value.slice(3),
          indented: true,
          line: nextToken.line,
          col: nextToken.col,
        });
        break;
      default: break;
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
    return (tokenType === 'endHeredoc') || this.moo.has(tokenType);
  }
}
