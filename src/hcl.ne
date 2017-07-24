
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

Primitive -> Boolean | Number | String

String -> QuoteString | Heredoc | IndentedHeredoc

Identifier -> %identifier | QuoteString

_ -> ws:?
ws -> %ws
