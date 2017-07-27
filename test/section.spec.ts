import test from "ava";
import makeParser from "../src/parser";
import select = require("unist-util-select");
import { loadFixture } from "./util";

import { Text } from "../src/types";

test("Parser should handle section definitions", t => {
  const parser = makeParser();
  parser.feed('resource "aws_instance" "foo" { name = "test-instance" }');
  const [ast] = parser.results;
  t.deepEqual(
    select(ast, 'Section Key[name="name"] + StringLiteral')[0].value,
    "test-instance"
  );
});

test("Parser should handle multiple section definitions", t => {
  const parser = makeParser();
  parser.feed(`
// AWS instance
resource "aws_instance" "foo" { name = "test-instance" }

// DNS
resource "aws_route53_route" "domain" {}

// Null resource
resource "null_resource" "bar" {}
`);
  const [ast] = parser.results;
  t.is(ast.children.length, 3);
});
