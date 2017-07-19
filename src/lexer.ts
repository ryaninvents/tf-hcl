import * as moo from 'moo';

/**
 * Lexer for main config body.
 */
const main = {};

/**
 * Lexer for string contents.
 */
const string = {};

/**
 * Lexer for interpolated values.
 */
const interpolated = {};

export default moo.states({main, string, interpolated})