@preprocessor typescript

@{%
/* tslint:disable:curly */
import {
  lexer, nil, hasValue, asString, nth, flatten,
  asNode, locationFromToken, locationFromTokens,
  asTokenNode, textNode, parseInt
} from './parser-util';

%}

@lexer lexer

# --------------------------------------------

# ## Main config body

# A config is a series of declarations.
Config -> _ Declarations:? _ {% asNode('Config', ([, children]) => ({ children })) %}

Declarations ->
  Declaration (_ Declaration {% nth(1) %} ):*
  {%
    ([first, rest]) => (
      rest
        ? [first].concat(rest)
        : [first]
    )
  %}

# A declaration can be either a member declaration or an assignment.
Declaration -> MemberDeclaration {% id %} | Assignment {% id %}

# A member declaration does not use the equals sign.
# @example
#     resource "aws_instance" "foo" {}
MemberDeclaration ->
  Key ws (Section {% nth(0) %} | Declaration {% id %})
  {%
    asNode('MemberDeclaration', ([left, , right]) => ({
      children: [left, right],
      position: {
        start: left.position.start,
        end: right.position.end,
      },
    }))
  %}

# An assignment uses the equals sign to set a value.
# @example
#     instance_count = 42
Assignment ->
  Key _ Equals _ Expression
  {%
    asNode('Assignment', ([left, , , , right]) => ({
      children: [left, right],
      position: {
        start: left.position.start,
        end: right.position.end,
      },
    }))
  %}

Expression -> Section {% id %} | List {% id %} | Primitive {% id %}

Section ->
  %openBrace _ (Declarations _ {% nth(0) %} ):? %closeBrace
  {%
    asNode('Section', ([openBrace,,children, closeBrace]) => ({
      children,
      position: locationFromTokens(openBrace, closeBrace),
    }))
  %}

List -> %openSqBrace _ (ListContents _ {% nth(0) %} ):? %closeSqBrace
  {%
    asNode('List', ([openBrace, , contents, closeBrace]) => ({
      children: contents || [],
      position: locationFromTokens(openBrace, closeBrace),
    }))
  %}

ListContents ->
  Value (_ Value {% nth(1) %} ):*
  {%
    ([first, rest]) => (
      rest
        ? [first].concat(rest)
        : [first]
    )
  %}

Value -> List {% id %} | Primitive {% id %} | Section {% id %}

Key -> Identifier {% asNode('Key', ([d]) => ({ name: d.value, children: [d], position: d.position })) %}
  | StringLiteral {% asNode('Key', ([d]) => ({ name: d, children: [d], position: d.position })) %}

Identifier -> %identifier {% asTokenNode('Identifier', ([d]: Token[]) => ({value: d.value})) %}

# -------------------------------------------

# ## Literals
Primitive -> Boolean {% id %} | Number {% id %} | String {% id %}

Boolean -> %boolean {% asTokenNode('Boolean') %}

Number -> %baseTenNumber {% asTokenNode('Number', ([{value}]) => ({rawValue: value, value: Number(value), base: 10})) %}
  | %hexadecimalNumber {% asTokenNode('Number', ([{value}]) => ({rawValue: value, value: parseInt(value.slice(2), 16), base: 16})) %}
  | %octalNumber {% asTokenNode('Number', ([{value}]) => ({rawValue: value, value: parseInt(value.slice(1), 8), base: 8})) %}

String -> StringLiteral {% id %} | TemplateString {% id %} | Heredoc {% id %} | IndentedHeredoc {% id %}

StringLiteral ->
  %beginString StringContent:? %endString
  {%
    asNode('StringLiteral', ([start, value, end]) => ({
      value: value.value,
      position: locationFromTokens(start, end),
    }))
  %}

StringContent -> StringChar:+ {% textNode %}

HeredocContent -> (%heredocChar {% asTokenNode() %} | %newline {% asTokenNode() %} ):+ {% textNode %}

StringChar
  -> %stringChar {% asTokenNode() %}
  | %newline {% asTokenNode() %}
  | %escapedDollar {% asTokenNode() %}

TemplateString ->
  %beginString (
    StringContent:? Interpolation
    {%
      ([str, interp]) => {
        if (str) {
          return [str, interp];
        }
        return [interp];
      }
    %}
  ):+ StringContent:? %endString
  {%
    asNode('TemplateString', ([beginString, startContents, endContents, endString]) => ({
      children: flatten(startContents).concat(endContents ? [endContents] : []),
      position: locationFromTokens(beginString, endString),
    }))
  %}

Heredoc ->
  %beginHeredoc HeredocContent:? (
    Interpolation HeredocContent:? {% ([interp, content]) => content ? [interp, content] : [interp] %}
  ):* %endHeredoc
  {%
    asNode('Heredoc', ([beginString, first, rest, endString]) => ({
      indented: false,
      tag: beginString.tag,
      children: (first ? [first] : []).concat(flatten(rest)),
      position: locationFromTokens(beginString, endString),
    }))
  %}


IndentedHeredoc ->
  %beginIndentedHeredoc HeredocContent:? (
    Interpolation HeredocContent:? {% ([interp, content]) => content ? [interp, content] : [interp] %}
  ):* %endHeredoc
  {%
    asNode('IndentedHeredoc', ([beginString, first, rest, endString]) => ({
      indented: true,
      tag: beginString.tag,
      children: [first].concat(flatten(rest)),
      position: locationFromTokens(beginString, endString),
    }))
  %}

Interpolation ->
  %beginInterpolation _ InterpolatedExpression _ %endInterpolation
  {%
    asNode('Interpolation', ([beginInterp, , expression, , endInterp]) => ({
      children: [expression],
      position: locationFromTokens(beginInterp, endInterp),
    }))
  %}

InterpolatedExpression
  -> SimpleInterpolatedExpr {% id %}
   | Sum {% id %}

SimpleInterpolatedExpr
  -> FunctionCall {% id %}
   | Primitive {% id %}
   | Identifier {% id %}
   | ParenExpr {% id %}

Sum
  -> Sum _ (%plus {% id %} | %minus {% id %}) _ Product
     {% asNode('BinaryExpression', ([first, , op, , rest]) => ({
       operator: op.value,
       children: [first, rest],
       position: {
         start: first.position.start,
         end: rest.position.end,
       }
     })) %}
   | Product {% id %}

Product
  -> Product _ (%star {% asTokenNode() %} | %slash {% asTokenNode() %} | %modulo {% asTokenNode() %}) _ SimpleInterpolatedExpr
     {% asNode('BinaryExpression', ([first, , op, , rest]) => ({
       operator: op.value,
       children: [first, rest],
       position: {
         start: first.position.start,
         end: rest.position.end,
       }
     })) %}
   | SimpleInterpolatedExpr {% id %}

ParenExpr -> %openParen _ InterpolatedExpression _ %closeParen {% nth(2) %}

FunctionCall ->
  Identifier %openParen _ FunctionArgs _ %closeParen
  {%
    asNode('FunctionCall', ([funcName,,,args,,closeParen]) => ({
      name: funcName.value,
      children: args,
      position: {
        start: funcName.position.start,
        end: locationFromToken(closeParen).end,
      },
    }))
  %}

FunctionArgs ->
  InterpolatedExpression (_ %comma _ InterpolatedExpression {% nth(3) %}):*
  {% ([first, rest]) => (rest ? [first].concat(rest) : [first]) %}

# ## Tokens
Equals -> %equal

# ## Whitespace and comments
_ -> ws:* {% nil %}
ws -> (%ws | LineComment | BlockComment) {% nil %}

LineComment -> %beginLineComment %commentText:* %endComment

BlockComment -> %beginBlockComment (%commentText | BlockComment):* %endBlockComment
