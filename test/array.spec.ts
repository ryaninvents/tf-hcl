import test from "ava";
import makeParser from "../src/parser";
import select = require("unist-util-select");
import inspect = require("unist-util-inspect");

import { loadFixture } from "./util";

const ASSIGN_FIXTURE = loadFixture("assign_deep.hcl");

test("deep assignment", t => {
  const parser = makeParser();
  parser.feed(ASSIGN_FIXTURE);
  t.is(parser.results.length, 1);

  const [ast] = parser.results;
  t.snapshot(
    (inspect as any).noColor(ast),
    "deep assignments"
  );
})
