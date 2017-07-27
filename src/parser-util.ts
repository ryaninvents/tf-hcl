import HclLexer, { Token } from "./lexer";
import { Node, Location, Position, Parent, Text } from "./types";

export const lexer = new HclLexer();

export function nil(): null {
  return null;
}

export function hasValue(x: any): boolean {
  return x && typeof x.value === "string";
}

export function asString(d: Array<Token | Node>): string {
  return d.filter(hasValue).map((el: Token | Text) => el.value).join("");
}

export function nth(i: number) {
  return (data: any[]): any => data[i];
}

export function flatten(d: any[][]): any[] {
  return d.reduce((a, b) => a.concat(b), []);
}

export type NodeCreator = (...args: any[]) => Node;

export function asNode(
  type: string,
  func: (...args: any[]) => any
): NodeCreator {
  return (data, offset, reject) => {
    const node = func(data, offset, reject);
    return { type, ...node };
  };
}

function mergeValue([t]: Token[] | Text[]): any {
  return { value: t.value };
}

export function locationFromToken(token: Token): Location {
  const { line, col: column, lineBreaks, size, value, offset } = token;
  if (lineBreaks === 0) {
    return {
      start: { line, column, offset },
      end: {
        line,
        column: column + size,
        offset: offset + size
      }
    };
  } else {
    return {
      start: { line, column, offset },
      end: {
        line: line + lineBreaks,
        column: value.length - value.lastIndexOf("\n"),
        offset: offset + size
      }
    };
  }
}

export function locationFromTokens(first: Token, last: Token): Location {
  const start = locationFromToken(first).start;
  const end = locationFromToken(last).end;
  return { start, end };
}

export function asTokenNode(
  type: string = "$token",
  func: (...args: any[]) => object = mergeValue
): (...args: any[]) => Node {
  return asNode(type, (data, offset, reject) => {
    const [token] = data;
    return {
      ...func(data, offset, reject),
      position: locationFromToken(token)
    };
  });
}

export const textNode = asNode("Text", ([d]: Node[][]) => {
  const value = asString(d);
  const [first] = d;
  if (d.length === 1) {
    return { value, position: first.position };
  }
  const last = d[d.length - 1];
  return {
    value: asString(d),
    position: {
      start: first.position.start,
      end: last.position.end
    }
  };
});
