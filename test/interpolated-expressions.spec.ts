import test from "ava";
import makeParser from "../src/parser";
import select = require("unist-util-select");
import inspect = require("unist-util-inspect");

import { Text } from "../src/types";

test("should handle variable names containing hyphens", t => {
  const parser = makeParser();
  parser.feed('my_value = "${some-important-value - some-other-value}"');
  const ast = parser.results[0];

  t.snapshot((inspect as any).noColor(ast), 'subtraction of two variables containing hyphens');
});
