import * as moo from "moo";

/**
 * Lexer for main config body.
 */
const main: moo.Rules = {
  beginLineComment: {match: ['#', '//'], push: 'lineComment'},
  beginBlockComment: {match: '/*', push: 'blockComment'},
  beginHeredoc: {match: /<<\w+\n/, push: 'heredocLiteral'},
  beginIndentedHeredoc: {match: /<<-\w+\n/, push: 'heredocLiteral'},
  beginString: {match: "\"", push: 'stringLiteral'},

  baseTenNumber: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
  boolean: ['true', 'on', 'yes', 'false', 'off', 'no'],
  identifier: /[A-Za-z_][A-Za-z0-9_-]*/,
  openBrace: '{',
  closeBrace: '}',
  dot: '.',
  equal: '=',
  ws: {match: /\s+/, lineBreaks: true},
};

/**
 * Lexer for <<HEREDOC strings.
 *
 * Heredocs are the reason we need to implement a lexer on top of Moo to manage state.
 */
const heredocLiteral: moo.Rules = {
  escapedDollar: "$$",
  newline: '\n',
  beginInterpolation: {match: "${", push: 'interpolated'},
};

/**
 * Lexer for ordinary string contents.
 *
 * This is mostly the same as heredoc strings, with a few modifications:
 * - Single unescaped quote (`"`) terminates the string.
 */
const stringLiteral: moo.Rules = {
  beginInterpolation: heredocLiteral.beginInterpolation,
  newline: heredocLiteral.newline,
  endString: {match: "\"", pop: 1},
};

/**
 * Lexer for interpolated values.
 */
const interpolated: moo.Rules = {
  beginLineComment: main.beginLineComment,
  beginBlockComment: main.beginBlockComment,
  beginHeredoc: main.beginHeredoc,
  beginIndentedHeredoc: main.beginIndentedHeredoc,
  beginString: main.beginString,

  baseTenNumber: main.baseTenNumber,
  boolean: main.boolean,
  comparison: ["==", "!=", ">", "<", ">=", "<="],
  boolAnd: "&&",
  boolOr: "||",
  bang: "!",
  question: "?",
  colon: ":",
  plus: "+",
  minus: "-",
  star: "*",
  slash: "/",
  modulo: "%",
  comma: ",",
  identifier: main.identifier,
  dot: main.dot,

  endInterpolation: {match: "}", pop: 1},
  openParen: "(",
  closeParen: ")",
  openSqBrace: "[",
  closeSqBrace: "]",
  ws: main.ws,
};

/**
 * Lexer for line comments.
 */
const lineComment: moo.Rules = {
  commentText: /[^\n]*?/,
  endComment: {match: '\n', pop: 1},
};

/**
 * Lexer for block comments.
 */
const blockComment: moo.Rules = {
  beginBlockComment: main.beginBlockComment,
  endBlockComment: {match: "*/", pop: 1},
  commentText: {match: /.*?/, lineBreaks: true},
};

export default () => moo.states({ main, stringLiteral, interpolated, lineComment, blockComment });
