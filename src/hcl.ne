@preprocessor typescript

@{%
import HclLexer from './lexer';

const lexer = new HclLexer();

function nil(): null { return null; }
%}

@lexer lexer

# --------------------------------------------

# A config is a series of declarations.
Config -> _ Declarations:? _

Declarations -> Declaration (_ Declaration):*

# A declaration can be either a member declaration or an assignment.
Declaration -> MemberDeclaration | Assignment

# A member declaration does not use the equals sign.
# @example
#     resource "aws_instance" "foo" {}
MemberDeclaration -> Identifier _ Expression

# An assignment uses the equals sign to set a value.
# @example
#     instance_count = 42
Assignment -> Identifier _ Equals _ Expression

Expression -> Declaration | Section | Primitive

Section -> %openBrace _ (Declarations _):? %closeBrace

Identifier -> %identifier | QuoteString

# ## Literals
Primitive -> Boolean | Number | String

Boolean -> %boolean

Number -> %baseTenNumber

String -> QuoteString # | Heredoc | IndentedHeredoc

QuoteString -> %beginString StringContent:* %endString

StringContent -> %stringChar | %newline | %escapedDollar

# ## Tokens
Equals -> %equal

# ## Whitespace and comments
_ -> ws:? {% nil %}
ws -> (%ws | LineComment | BlockComment) {% nil %}

LineComment -> %beginLineComment %commentText:* %endComment

BlockComment -> %beginBlockComment (%commentText | BlockComment):* %endBlockComment
