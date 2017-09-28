import test from "ava";
import * as index from "../src";

test("should export expected API", t => {
  t.is(Object.keys(index).length, 1);
  t.is(typeof index.makeParser, "function");
});
