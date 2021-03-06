import test from "ava";
import makeParser from "../src/parser";
import select = require("unist-util-select");
import { loadFixture } from "./util";

import { Text } from "../src/types";

const BASIC_FIXTURE = loadFixture("basic.hcl");
const INDENTED_HEREDOC = loadFixture("multiline-indented.hcl");

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

test("Parser should read template strings containing some literal text", t => {
  const parser = makeParser();
  parser.feed('foo = "somePrefix ${bar("baz")} someSuffix"');
  const [ast] = parser.results;
  t.deepEqual(
    (select(
      ast,
      "Assignment TemplateString Text"
    ) as Text[]).map(({ type, value }) => ({ type, value })),
    [
      { type: "Text", value: "somePrefix " },
      { type: "Text", value: " someSuffix" }
    ]
  );
});

test("Parser should read template strings containing multiple interpolations", t => {
  const parser = makeParser();
  parser.feed(
    'foo = "somePrefix ${bar("baz")}${"quux"} other text ${"mumble"} someSuffix"'
  );
  const [ast] = parser.results;
  t.deepEqual(select(ast, "Assignment TemplateString Interpolation").length, 3);
});

test("No false-positive matches on heredoc end", t => {
  const parser = makeParser();
  parser.feed(`
myHeredoc = <<EOF
EOS
EOT
EOF
`);
  const [ast] = parser.results;
  t.deepEqual(select(ast, "Config Heredoc Text")[0].value, "EOS\nEOT\n");
});

test("Should read multiple interpolations in a heredoc", t => {
  const parser = makeParser();
  parser.feed(`
myHeredoc = <<EOF
\${bar("baz")}\${"quux"}
other text
\${"mumble"}
EOF
`);
  const [ast] = parser.results;
  t.deepEqual(select(ast, "Heredoc Interpolation").length, 3);
});

test("Should read multiple interpolations in an indented heredoc", t => {
  const parser = makeParser();
  parser.feed(`
myHeredoc = <<-EOF
            \${bar("baz")}\${"quux"}
            other text
            \${"mumble"}
            EOF
`);
  const [ast] = parser.results;
  t.deepEqual(select(ast, "IndentedHeredoc Interpolation").length, 3);
});

test("Indented heredoc strings", t => {
  const parser = makeParser();
  parser.feed(INDENTED_HEREDOC);
  const [ast] = parser.results;
  t.is(select(ast, "IndentedHeredoc").length, 1);
});
