# Snapshot report for `lib_test/test/lexer.spec.js`

The actual snapshot is saved in `lexer.spec.js.snap`.

Generated by [AVA](https://ava.li).

## Should format errors correctly

> Snapshot 1

    `undefined at line 1 col 1:␊
    ␊
      ␊
      ^`

## Should save state correctly

> Snapshot 1

    [
      {
        col: 1,
        line: 1,
        lineBreaks: 1,
        offset: 0,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 2,
        lineBreaks: 0,
        offset: 1,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'foo',
      },
      {
        col: 4,
        line: 2,
        lineBreaks: 0,
        offset: 4,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 5,
        line: 2,
        lineBreaks: 0,
        offset: 5,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 6,
        line: 2,
        lineBreaks: 0,
        offset: 6,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 7,
        line: 2,
        lineBreaks: 0,
        offset: 7,
        size: 1,
        toString: Function tokenToString {},
        type: 'openBrace',
        value: '{',
      },
      {
        col: 8,
        line: 2,
        lineBreaks: 1,
        offset: 8,
        size: 3,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
          `,
      },
      {
        col: 3,
        line: 3,
        lineBreaks: 0,
        offset: 11,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'bar',
      },
      {
        col: 6,
        line: 3,
        lineBreaks: 0,
        offset: 14,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 7,
        line: 3,
        lineBreaks: 0,
        offset: 15,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 8,
        line: 3,
        lineBreaks: 0,
        offset: 16,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 9,
        line: 3,
        lineBreaks: 0,
        offset: 17,
        size: 1,
        toString: Function tokenToString {},
        type: 'beginString',
        value: '"',
      },
      {
        col: 10,
        line: 3,
        lineBreaks: 0,
        offset: 18,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'b',
      },
      {
        col: 11,
        line: 3,
        lineBreaks: 0,
        offset: 19,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'a',
      },
      {
        col: 12,
        line: 3,
        lineBreaks: 0,
        offset: 20,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'z',
      },
      {
        col: 13,
        line: 3,
        lineBreaks: 0,
        offset: 21,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: ' ',
      },
      {
        col: 14,
        line: 3,
        lineBreaks: 0,
        offset: 22,
        size: 2,
        toString: Function tokenToString {},
        type: 'escapedDollar',
        value: '$$',
      },
      {
        col: 16,
        line: 3,
        lineBreaks: 0,
        offset: 24,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: '{',
      },
      {
        col: 17,
        line: 3,
        lineBreaks: 0,
        offset: 25,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'q',
      },
      {
        col: 18,
        line: 3,
        lineBreaks: 0,
        offset: 26,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'u',
      },
      {
        col: 19,
        line: 3,
        lineBreaks: 0,
        offset: 27,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'u',
      },
      {
        col: 20,
        line: 3,
        lineBreaks: 0,
        offset: 28,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'x',
      },
      {
        col: 21,
        line: 3,
        lineBreaks: 0,
        offset: 29,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: '}',
      },
      {
        col: 22,
        line: 3,
        lineBreaks: 0,
        offset: 30,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: ' ',
      },
      {
        col: 23,
        line: 3,
        lineBreaks: 0,
        offset: 31,
        size: 2,
        toString: Function tokenToString {},
        type: 'beginInterpolation',
        value: '${',
      },
      {
        col: 25,
        line: 3,
        lineBreaks: 0,
        offset: 33,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'var',
      },
      {
        col: 28,
        line: 3,
        lineBreaks: 0,
        offset: 36,
        size: 1,
        toString: Function tokenToString {},
        type: 'dot',
        value: '.',
      },
      {
        col: 29,
        line: 3,
        lineBreaks: 0,
        offset: 37,
        size: 6,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'mumble',
      },
      {
        col: 35,
        line: 3,
        lineBreaks: 0,
        offset: 43,
        size: 1,
        toString: Function tokenToString {},
        type: 'endInterpolation',
        value: '}',
      },
      {
        col: 36,
        line: 3,
        lineBreaks: 0,
        offset: 44,
        size: 1,
        toString: Function tokenToString {},
        type: 'endString',
        value: '"',
      },
      {
        col: 37,
        line: 3,
        lineBreaks: 1,
        offset: 45,
        size: 3,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
          `,
      },
      {
        col: 3,
        line: 4,
        lineBreaks: 0,
        offset: 48,
        size: 4,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'quux',
      },
      {
        col: 7,
        line: 4,
        lineBreaks: 0,
        offset: 52,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 8,
        line: 4,
        lineBreaks: 0,
        offset: 53,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 9,
        line: 4,
        lineBreaks: 0,
        offset: 54,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 10,
        line: 4,
        lineBreaks: 0,
        offset: 55,
        size: 2,
        toString: Function tokenToString {},
        type: 'baseTenNumber',
        value: '42',
      },
      {
        col: 12,
        line: 4,
        lineBreaks: 1,
        offset: 57,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 5,
        lineBreaks: 0,
        offset: 58,
        size: 1,
        toString: Function tokenToString {},
        type: 'closeBrace',
        value: '}',
      },
      {
        col: 2,
        line: 5,
        lineBreaks: 2,
        offset: 59,
        size: 2,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        ␊
        `,
      },
      {
        col: 1,
        line: 7,
        lineBreaks: 0,
        offset: 61,
        size: 2,
        toString: Function tokenToString {},
        type: 'beginLineComment',
        value: '//',
      },
      {
        col: 3,
        line: 7,
        lineBreaks: 0,
        offset: 63,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 4,
        line: 7,
        lineBreaks: 0,
        offset: 64,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'E',
      },
      {
        col: 5,
        line: 7,
        lineBreaks: 0,
        offset: 65,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'x',
      },
      {
        col: 6,
        line: 7,
        lineBreaks: 0,
        offset: 66,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'a',
      },
      {
        col: 7,
        line: 7,
        lineBreaks: 0,
        offset: 67,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'm',
      },
      {
        col: 8,
        line: 7,
        lineBreaks: 0,
        offset: 68,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'p',
      },
      {
        col: 9,
        line: 7,
        lineBreaks: 0,
        offset: 69,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'l',
      },
      {
        col: 10,
        line: 7,
        lineBreaks: 0,
        offset: 70,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'e',
      },
      {
        col: 11,
        line: 7,
        lineBreaks: 0,
        offset: 71,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 12,
        line: 7,
        lineBreaks: 0,
        offset: 72,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'o',
      },
      {
        col: 13,
        line: 7,
        lineBreaks: 0,
        offset: 73,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'f',
      },
      {
        col: 14,
        line: 7,
        lineBreaks: 0,
        offset: 74,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 15,
        line: 7,
        lineBreaks: 0,
        offset: 75,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'a',
      },
      {
        col: 16,
        line: 7,
        lineBreaks: 0,
        offset: 76,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 17,
        line: 7,
        lineBreaks: 0,
        offset: 77,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'h',
      },
      {
        col: 18,
        line: 7,
        lineBreaks: 0,
        offset: 78,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'e',
      },
      {
        col: 19,
        line: 7,
        lineBreaks: 0,
        offset: 79,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'r',
      },
      {
        col: 20,
        line: 7,
        lineBreaks: 0,
        offset: 80,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'e',
      },
      {
        col: 21,
        line: 7,
        lineBreaks: 0,
        offset: 81,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'd',
      },
      {
        col: 22,
        line: 7,
        lineBreaks: 0,
        offset: 82,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'o',
      },
      {
        col: 23,
        line: 7,
        lineBreaks: 0,
        offset: 83,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'c',
      },
      {
        col: 24,
        line: 7,
        lineBreaks: 1,
        offset: 84,
        size: 1,
        toString: Function tokenToString {},
        type: 'endComment',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 8,
        lineBreaks: 0,
        offset: 85,
        size: 6,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'mumble',
      },
      {
        col: 7,
        line: 8,
        lineBreaks: 0,
        offset: 91,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 8,
        line: 8,
        lineBreaks: 0,
        offset: 92,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 9,
        line: 8,
        lineBreaks: 0,
        offset: 93,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 10,
        line: 8,
        lineBreaks: 1,
        offset: 94,
        size: 6,
        tag: 'EOF',
        toString: Function tokenToString {},
        type: 'beginHeredoc',
        value: `<<EOF␊
        `,
      },
      {
        col: 1,
        line: 9,
        lineBreaks: 0,
        offset: 100,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'f',
      },
      {
        col: 2,
        line: 9,
        lineBreaks: 0,
        offset: 101,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'o',
      },
      {
        col: 3,
        line: 9,
        lineBreaks: 0,
        offset: 102,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'o',
      },
      {
        col: 4,
        line: 9,
        lineBreaks: 0,
        offset: 103,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: ' ',
      },
      {
        col: 5,
        line: 9,
        lineBreaks: 0,
        offset: 104,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'b',
      },
      {
        col: 6,
        line: 9,
        lineBreaks: 0,
        offset: 105,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'a',
      },
      {
        col: 7,
        line: 9,
        lineBreaks: 0,
        offset: 106,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'r',
      },
      {
        col: 8,
        line: 9,
        lineBreaks: 0,
        offset: 107,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: ' ',
      },
      {
        col: 9,
        line: 9,
        lineBreaks: 0,
        offset: 108,
        size: 2,
        toString: Function tokenToString {},
        type: 'beginInterpolation',
        value: '${',
      },
      {
        col: 11,
        line: 9,
        lineBreaks: 0,
        offset: 110,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'baz',
      },
      {
        col: 14,
        line: 9,
        lineBreaks: 0,
        offset: 113,
        size: 1,
        toString: Function tokenToString {},
        type: 'openParen',
        value: '(',
      },
      {
        col: 15,
        line: 9,
        lineBreaks: 0,
        offset: 114,
        size: 1,
        toString: Function tokenToString {},
        type: 'baseTenNumber',
        value: '2',
      },
      {
        col: 16,
        line: 9,
        lineBreaks: 0,
        offset: 115,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 17,
        line: 9,
        lineBreaks: 0,
        offset: 116,
        size: 1,
        toString: Function tokenToString {},
        type: 'plus',
        value: '+',
      },
      {
        col: 18,
        line: 9,
        lineBreaks: 0,
        offset: 117,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 19,
        line: 9,
        lineBreaks: 0,
        offset: 118,
        size: 1,
        toString: Function tokenToString {},
        type: 'baseTenNumber',
        value: '2',
      },
      {
        col: 20,
        line: 9,
        lineBreaks: 0,
        offset: 119,
        size: 1,
        toString: Function tokenToString {},
        type: 'closeParen',
        value: ')',
      },
      {
        col: 21,
        line: 9,
        lineBreaks: 0,
        offset: 120,
        size: 1,
        toString: Function tokenToString {},
        type: 'endInterpolation',
        value: '}',
      },
    ]

> after break

    [
      {
        col: 1,
        line: 1,
        lineBreaks: 1,
        offset: 0,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 2,
        lineBreaks: 0,
        offset: 1,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'foo',
      },
      {
        col: 4,
        line: 2,
        lineBreaks: 0,
        offset: 4,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 5,
        line: 2,
        lineBreaks: 0,
        offset: 5,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 6,
        line: 2,
        lineBreaks: 0,
        offset: 6,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 7,
        line: 2,
        lineBreaks: 0,
        offset: 7,
        size: 1,
        toString: Function tokenToString {},
        type: 'openBrace',
        value: '{',
      },
      {
        col: 8,
        line: 2,
        lineBreaks: 1,
        offset: 8,
        size: 3,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
          `,
      },
      {
        col: 3,
        line: 3,
        lineBreaks: 0,
        offset: 11,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'bar',
      },
      {
        col: 6,
        line: 3,
        lineBreaks: 0,
        offset: 14,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 7,
        line: 3,
        lineBreaks: 0,
        offset: 15,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 8,
        line: 3,
        lineBreaks: 0,
        offset: 16,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 9,
        line: 3,
        lineBreaks: 0,
        offset: 17,
        size: 1,
        toString: Function tokenToString {},
        type: 'beginString',
        value: '"',
      },
      {
        col: 10,
        line: 3,
        lineBreaks: 0,
        offset: 18,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'b',
      },
      {
        col: 11,
        line: 3,
        lineBreaks: 0,
        offset: 19,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'a',
      },
      {
        col: 12,
        line: 3,
        lineBreaks: 0,
        offset: 20,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'z',
      },
      {
        col: 13,
        line: 3,
        lineBreaks: 0,
        offset: 21,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: ' ',
      },
      {
        col: 14,
        line: 3,
        lineBreaks: 0,
        offset: 22,
        size: 2,
        toString: Function tokenToString {},
        type: 'escapedDollar',
        value: '$$',
      },
      {
        col: 16,
        line: 3,
        lineBreaks: 0,
        offset: 24,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: '{',
      },
      {
        col: 17,
        line: 3,
        lineBreaks: 0,
        offset: 25,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'q',
      },
      {
        col: 18,
        line: 3,
        lineBreaks: 0,
        offset: 26,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'u',
      },
      {
        col: 19,
        line: 3,
        lineBreaks: 0,
        offset: 27,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'u',
      },
      {
        col: 20,
        line: 3,
        lineBreaks: 0,
        offset: 28,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: 'x',
      },
      {
        col: 21,
        line: 3,
        lineBreaks: 0,
        offset: 29,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: '}',
      },
      {
        col: 22,
        line: 3,
        lineBreaks: 0,
        offset: 30,
        size: 1,
        toString: Function tokenToString {},
        type: 'stringChar',
        value: ' ',
      },
      {
        col: 23,
        line: 3,
        lineBreaks: 0,
        offset: 31,
        size: 2,
        toString: Function tokenToString {},
        type: 'beginInterpolation',
        value: '${',
      },
      {
        col: 25,
        line: 3,
        lineBreaks: 0,
        offset: 33,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'var',
      },
      {
        col: 28,
        line: 3,
        lineBreaks: 0,
        offset: 36,
        size: 1,
        toString: Function tokenToString {},
        type: 'dot',
        value: '.',
      },
      {
        col: 29,
        line: 3,
        lineBreaks: 0,
        offset: 37,
        size: 6,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'mumble',
      },
      {
        col: 35,
        line: 3,
        lineBreaks: 0,
        offset: 43,
        size: 1,
        toString: Function tokenToString {},
        type: 'endInterpolation',
        value: '}',
      },
      {
        col: 36,
        line: 3,
        lineBreaks: 0,
        offset: 44,
        size: 1,
        toString: Function tokenToString {},
        type: 'endString',
        value: '"',
      },
      {
        col: 37,
        line: 3,
        lineBreaks: 1,
        offset: 45,
        size: 3,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
          `,
      },
      {
        col: 3,
        line: 4,
        lineBreaks: 0,
        offset: 48,
        size: 4,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'quux',
      },
      {
        col: 7,
        line: 4,
        lineBreaks: 0,
        offset: 52,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 8,
        line: 4,
        lineBreaks: 0,
        offset: 53,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 9,
        line: 4,
        lineBreaks: 0,
        offset: 54,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 10,
        line: 4,
        lineBreaks: 0,
        offset: 55,
        size: 2,
        toString: Function tokenToString {},
        type: 'baseTenNumber',
        value: '42',
      },
      {
        col: 12,
        line: 4,
        lineBreaks: 1,
        offset: 57,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 5,
        lineBreaks: 0,
        offset: 58,
        size: 1,
        toString: Function tokenToString {},
        type: 'closeBrace',
        value: '}',
      },
      {
        col: 2,
        line: 5,
        lineBreaks: 2,
        offset: 59,
        size: 2,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        ␊
        `,
      },
      {
        col: 1,
        line: 7,
        lineBreaks: 0,
        offset: 61,
        size: 2,
        toString: Function tokenToString {},
        type: 'beginLineComment',
        value: '//',
      },
      {
        col: 3,
        line: 7,
        lineBreaks: 0,
        offset: 63,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 4,
        line: 7,
        lineBreaks: 0,
        offset: 64,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'E',
      },
      {
        col: 5,
        line: 7,
        lineBreaks: 0,
        offset: 65,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'x',
      },
      {
        col: 6,
        line: 7,
        lineBreaks: 0,
        offset: 66,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'a',
      },
      {
        col: 7,
        line: 7,
        lineBreaks: 0,
        offset: 67,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'm',
      },
      {
        col: 8,
        line: 7,
        lineBreaks: 0,
        offset: 68,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'p',
      },
      {
        col: 9,
        line: 7,
        lineBreaks: 0,
        offset: 69,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'l',
      },
      {
        col: 10,
        line: 7,
        lineBreaks: 0,
        offset: 70,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'e',
      },
      {
        col: 11,
        line: 7,
        lineBreaks: 0,
        offset: 71,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 12,
        line: 7,
        lineBreaks: 0,
        offset: 72,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'o',
      },
      {
        col: 13,
        line: 7,
        lineBreaks: 0,
        offset: 73,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'f',
      },
      {
        col: 14,
        line: 7,
        lineBreaks: 0,
        offset: 74,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 15,
        line: 7,
        lineBreaks: 0,
        offset: 75,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'a',
      },
      {
        col: 16,
        line: 7,
        lineBreaks: 0,
        offset: 76,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: ' ',
      },
      {
        col: 17,
        line: 7,
        lineBreaks: 0,
        offset: 77,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'h',
      },
      {
        col: 18,
        line: 7,
        lineBreaks: 0,
        offset: 78,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'e',
      },
      {
        col: 19,
        line: 7,
        lineBreaks: 0,
        offset: 79,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'r',
      },
      {
        col: 20,
        line: 7,
        lineBreaks: 0,
        offset: 80,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'e',
      },
      {
        col: 21,
        line: 7,
        lineBreaks: 0,
        offset: 81,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'd',
      },
      {
        col: 22,
        line: 7,
        lineBreaks: 0,
        offset: 82,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'o',
      },
      {
        col: 23,
        line: 7,
        lineBreaks: 0,
        offset: 83,
        size: 1,
        toString: Function tokenToString {},
        type: 'commentText',
        value: 'c',
      },
      {
        col: 24,
        line: 7,
        lineBreaks: 1,
        offset: 84,
        size: 1,
        toString: Function tokenToString {},
        type: 'endComment',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 8,
        lineBreaks: 0,
        offset: 85,
        size: 6,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'mumble',
      },
      {
        col: 7,
        line: 8,
        lineBreaks: 0,
        offset: 91,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 8,
        line: 8,
        lineBreaks: 0,
        offset: 92,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 9,
        line: 8,
        lineBreaks: 0,
        offset: 93,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 10,
        line: 8,
        lineBreaks: 1,
        offset: 94,
        size: 6,
        tag: 'EOF',
        toString: Function tokenToString {},
        type: 'beginHeredoc',
        value: `<<EOF␊
        `,
      },
      {
        col: 1,
        line: 9,
        lineBreaks: 0,
        offset: 100,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'f',
      },
      {
        col: 2,
        line: 9,
        lineBreaks: 0,
        offset: 101,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'o',
      },
      {
        col: 3,
        line: 9,
        lineBreaks: 0,
        offset: 102,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'o',
      },
      {
        col: 4,
        line: 9,
        lineBreaks: 0,
        offset: 103,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: ' ',
      },
      {
        col: 5,
        line: 9,
        lineBreaks: 0,
        offset: 104,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'b',
      },
      {
        col: 6,
        line: 9,
        lineBreaks: 0,
        offset: 105,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'a',
      },
      {
        col: 7,
        line: 9,
        lineBreaks: 0,
        offset: 106,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: 'r',
      },
      {
        col: 8,
        line: 9,
        lineBreaks: 0,
        offset: 107,
        size: 1,
        toString: Function tokenToString {},
        type: 'heredocChar',
        value: ' ',
      },
      {
        col: 9,
        line: 9,
        lineBreaks: 0,
        offset: 108,
        size: 2,
        toString: Function tokenToString {},
        type: 'beginInterpolation',
        value: '${',
      },
      {
        col: 11,
        line: 9,
        lineBreaks: 0,
        offset: 110,
        size: 3,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'baz',
      },
      {
        col: 14,
        line: 9,
        lineBreaks: 0,
        offset: 113,
        size: 1,
        toString: Function tokenToString {},
        type: 'openParen',
        value: '(',
      },
      {
        col: 15,
        line: 9,
        lineBreaks: 0,
        offset: 114,
        size: 1,
        toString: Function tokenToString {},
        type: 'baseTenNumber',
        value: '2',
      },
      {
        col: 16,
        line: 9,
        lineBreaks: 0,
        offset: 115,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 17,
        line: 9,
        lineBreaks: 0,
        offset: 116,
        size: 1,
        toString: Function tokenToString {},
        type: 'plus',
        value: '+',
      },
      {
        col: 18,
        line: 9,
        lineBreaks: 0,
        offset: 117,
        size: 1,
        toString: Function tokenToString {},
        type: 'ws',
        value: ' ',
      },
      {
        col: 19,
        line: 9,
        lineBreaks: 0,
        offset: 118,
        size: 1,
        toString: Function tokenToString {},
        type: 'baseTenNumber',
        value: '2',
      },
      {
        col: 20,
        line: 9,
        lineBreaks: 0,
        offset: 119,
        size: 1,
        toString: Function tokenToString {},
        type: 'closeParen',
        value: ')',
      },
      {
        col: 21,
        line: 9,
        lineBreaks: 0,
        offset: 120,
        size: 1,
        toString: Function tokenToString {},
        type: 'endInterpolation',
        value: '}',
      },
      {
        col: 22,
        line: 9,
        lineBreaks: 1,
        offset: 0,
        size: 1,
        toString: Function tokenToString {},
        type: 'newline',
        value: `␊
        `,
      },
      {
        col: 1,
        line: 10,
        lineBreaks: 0,
        offset: 1,
        size: 3,
        type: 'endHeredoc',
        value: 'EOF',
      },
      {
        col: 1,
        line: 11,
        lineBreaks: 2,
        offset: 4,
        size: 2,
        toString: Function tokenToString {},
        type: 'ws',
        value: `␊
        ␊
        `,
      },
      {
        col: 1,
        line: 13,
        lineBreaks: 0,
        offset: 6,
        size: 12,
        toString: Function tokenToString {},
        type: 'identifier',
        value: 'more_content',
      },
      {
        col: 13,
        line: 13,
        lineBreaks: 0,
        offset: 18,
        size: 1,
        toString: Function tokenToString {},
        type: 'equal',
        value: '=',
      },
      {
        col: 14,
        line: 13,
        lineBreaks: 0,
        offset: 19,
        size: 4,
        toString: Function tokenToString {},
        type: 'boolean',
        value: 'true',
      },
    ]
