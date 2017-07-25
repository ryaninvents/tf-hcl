@preprocessor typescript

@{%
/* tslint:disable:curly */
import HclLexer, {Token} from './lexer';

const lexer = new HclLexer();

function nil(): null { return null; }

function asString(d: any[]): string {
  return d.filter((el) => typeof el === 'string' || (el && typeof el.value === 'string'))
    .map((el) => el.value || el)
    .join('');
}

function nth(i: number) {
  return (data: any[]): any => data[i];
}

function asNode(type: string, func: (...args: any[]) => any): (...args: any[]) => any {
  return (data, location, reject) => {
    const node = func(data, location, reject);
    return {
      type,
      location,
      ...node,
    };
  };
}
%}

@lexer lexer

# --------------------------------------------

# A config is a series of declarations.
Config -> _ Declarations:? _ {% asNode('Config', ([, children]) => ({ children })) %}

Declarations -> Declaration (_ Declaration {% nth(1) %} ):* {%
  ([first, rest]) => rest ? [first].concat(rest) : [first]
%}

# A declaration can be either a member declaration or an assignment.
Declaration -> MemberDeclaration {% id %} | Assignment {% id %}

# A member declaration does not use the equals sign.
# @example
#     resource "aws_instance" "foo" {}
MemberDeclaration ->
  Identifier ws (Expression {% nth(0) %} | Declaration {% id %}) {%
    asNode('MemberDeclaration', ([left, , right]) => ({ children: [left, right] }))
  %}

# An assignment uses the equals sign to set a value.
# @example
#     instance_count = 42
Assignment ->
  Identifier _ Equals _ Expression {%
    asNode('Assignment', ([left, , , , right]) => ({ children: [left, right] }))
  %}

Expression -> Section {% id %} | Primitive {% id %}

Section ->
  %openBrace _ (Declarations _ {% nth(0) %} ):? %closeBrace {%
    asNode('Section', ([,,children]) => ({ children }))
  %}

Identifier -> %identifier {% asNode('Identifier', ([d]: Token[]) => ({value: d.value})) %}
  | StringLiteral {% asNode('Identifier', (d) => ({ value: d })) %}

# ## Literals
Primitive -> Boolean {% id %} | Number {% id %} | String {% id %}

Boolean -> %boolean

Number -> %baseTenNumber

String -> StringLiteral {% id %} # | TemplateString # | Heredoc | IndentedHeredoc

StringLiteral -> %beginString StringContent:* %endString {% ([, value]) => ({type: 'StringLiteral', value: asString(value)}) %}

StringContent -> %stringChar {% asString %} | %newline {% asString %} | %escapedDollar {% asString %}

TemplateString -> %beginString TemplateStringContent:* %endString

TemplateStringContent -> StringContent

# ## Tokens
Equals -> %equal

# ## Whitespace and comments
_ -> ws:? {% nil %}
ws -> (%ws | LineComment | BlockComment) {% nil %}

LineComment -> %beginLineComment %commentText:* %endComment

BlockComment -> %beginBlockComment (%commentText | BlockComment):* %endBlockComment
