import test from "ava";
import makeParser from "../src/parser";
import select = require("unist-util-select");
import { loadFixture } from "./util";

import { Text } from "../src/types";

const BASIC_FIXTURE = loadFixture("basic.hcl");

test("base-10 numbers", t => {
  const parser = makeParser();
  parser.feed("my_number = 42.356");
  const [ast] = parser.results;

  const node = select(ast, 'Key[name="my_number"] + Number')[0];
  t.is(node.rawValue, "42.356");
  t.is(node.value, 42.356);
  t.is(node.base, 10);
});

test("hexadecimal numbers", t => {
  const parser = makeParser();
  parser.feed("my_number = 0x99BEEF");
  const [ast] = parser.results;

  const node = select(ast, 'Key[name="my_number"] + Number')[0];
  t.is(node.rawValue, "0x99BEEF");
  t.is(node.value, 0x99beef);
  t.is(node.base, 16);
});

test("octal numbers", t => {
  const parser = makeParser();
  parser.feed("permissions = 0777");
  const [ast] = parser.results;

  const node = select(ast, 'Key[name="permissions"] + Number')[0];
  t.is(node.rawValue, "0777");
  t.is(node.value, 0o777);
  t.is(node.base, 8);
});

test("should throw if invalid octal", t => {
  const parser = makeParser();
  t.throws(() => {
    parser.feed("permissions = 0797");
  });
});
