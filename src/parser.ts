import { ParserRules, ParserStart } from "./hcl.ne";
import Nearley = require("nearley");
import HclLexer from "./lexer";

export default function makeParser() {
  const lexer = new HclLexer();
  return new Nearley.Parser(ParserRules, ParserStart, { lexer });
}
