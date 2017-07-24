import test from "ava";
import HclLexer from '../src/lexer';

function stringChars(str: string, type = 'stringChar') {
  return str.split('').map((c: string) => [type, c]);
}

test('Should find tokens correctly', t => {
  const SOURCE_TEXT = `
foo = {
  bar = "baz \$\${quux} \${var.mumble}"
  quux = 42
}

// Example of a heredoc
mumble = <<EOF
foo bar \${baz(2 + 2)}
EOF

more_content = true
`;
  const lex = new HclLexer(SOURCE_TEXT);
  const output = [];
  let token;

  while (token = lex.next()) {
    output.push(token);
  }

  t.deepEqual(
    output.filter(token => token.type !== 'ws')
      .map(token => [token.type, token.value]),
    [
      ['identifier', 'foo'],
      ['equal', '='],
      ['openBrace', '{'],
      ['identifier', 'bar'],
      ['equal', '='],
      ['beginString', '"'],
      ...stringChars('baz '),
      ['escapedDollar', '$$'],
      ...stringChars('{quux} '),
      ['beginInterpolation', '${'],
      ['identifier', 'var'],
      ['dot', '.'],
      ['identifier', 'mumble'],
      ['endInterpolation', '}'],
      ['endString', '"'],
      ['identifier', 'quux'],
      ['equal', '='],
      ['baseTenNumber', '42'],
      ['closeBrace', '}'],
      ['beginLineComment', '//'],
      ...stringChars(' Example of a heredoc', 'commentText'),
      ['endComment', '\n'],
      ['identifier', 'mumble'],
      ['equal', '='],
      ['beginHeredoc', '<<EOF\n'],
      ...stringChars('foo bar '),
      ['beginInterpolation', '${'],
      ['identifier', 'baz'],
      ['openParen', '('],
      ['baseTenNumber', '2'],
      ['plus', '+'],
      ['baseTenNumber', '2'],
      ['closeParen', ')'],
      ['endInterpolation', '}'],
      ['newline', '\n'],
      ['endHeredoc', 'EOF\n'],
      ['identifier', 'more_content'],
      ['equal', '='],
      ['boolean', 'true'],
    ]
  );
});
