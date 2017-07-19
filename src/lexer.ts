import * as moo from "moo";

/**
 * Lexer for main config body.
 */
const main: moo.Rules = {};

/**
 * Lexer for string contents.
 */
const stringLiteral: moo.Rules = {};

/**
 * Lexer for interpolated values.
 */
const interpolated: moo.Rules = {};

export default moo.states({ main, stringLiteral, interpolated });
