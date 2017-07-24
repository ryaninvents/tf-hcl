import test from "ava";
import HclLexer from '../src/lexer';

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

  t.snapshot(output);
})
