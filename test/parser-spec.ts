import test from "ava";
import makeParser from "../src/parser";
import path = require("path");
import fs = require("fs");
import select = require("unist-util-select");

function loadFixture(fnm: string): string {
  return fs
    .readFileSync(path.resolve(__dirname, path.join("../../fixtures", fnm)))
    .toString();
}

const BASIC_FIXTURE = loadFixture("basic.hcl");

test("Parser should read simple string assignments", t => {
  const parser = makeParser();
  parser.feed(BASIC_FIXTURE);
  const [ast] = parser.results;
  t.is(select(ast, "Config Assignment Key")[0].name, "foo");
  t.is(select(ast, "Config Assignment StringLiteral")[0].value, "bar");
});

test("Parser should read template strings", t => {
  const parser = makeParser();
  parser.feed(BASIC_FIXTURE);
  const [ast] = parser.results;
  t.is(select(ast, "Config Assignment:nth-child(2) Key")[0].name, "bar");
  t.is(
    select(ast, "Config Assignment:nth-child(2) TemplateString FunctionCall")[0]
      .name,
    "file"
  );
  t.is(
    select(
      ast,
      "Config Assignment:nth-child(2) TemplateString FunctionCall StringLiteral"
    )[0].value,
    "bing/bong.txt"
  );
});

test("Parser should read numeric assignments", t => {
  const parser = makeParser();
  parser.feed(BASIC_FIXTURE);
  const [ast] = parser.results;
  t.is(select(ast, 'Config Key[name="some_number"] + Number')[0].value, "42");
});
