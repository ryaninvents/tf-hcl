import path = require("path");
import fs = require("fs");

export function loadFixture(fnm: string): string {
  return fs
    .readFileSync(path.resolve(__dirname, path.join("../../fixtures", fnm)))
    .toString();
}
