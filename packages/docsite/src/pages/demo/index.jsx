import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { siteMetadata } from '../../../gatsby-config'
import UnistTree from '../../components/unist/UnistTree'
import Editor from '../../components/Editor'
import debounce from 'lodash/debounce'

import { makeParser } from 'tf-hcl'

const DEFAULT_SRC = `# Simple EC2 instance
resource "aws_instance" "my_ec2" {
  ami           = "ami-1234567"
  instance_type = "t2.micro"

  tags {
    Name = "HelloWorld"
  }
}`

const Error = styled('div')`
  background-color: #f44336;
  color: white;
  white-space: pre;
  font-family: IBM Plex Mono, Menlo, monospace;
`

class Demo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      source: DEFAULT_SRC,
      ast: this.parse(DEFAULT_SRC),
    }

    this.handleChange = debounce(this.handleChange.bind(this), 1000)
  }

  parse(source) {
    try {
      const parser = makeParser()
      parser.feed(source)
      return parser.results[0]
    } catch (err) {
      return err.message
    }
  }

  handleChange(newSource) {
    this.setState({
      source: newSource,
      ast: this.parse(newSource),
    })
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Demo'
    const { ast } = this.state

    const result =
      typeof ast === 'string' ? <Error>{ast}</Error> : <UnistTree data={ast} />

    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/profile`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpg`,
            },
          ]}
        />
        <div className="container-fluid d-flex flex-column h-100">
          <div className="row" />
          <div className="row flex-greedy">
            <div className="border col-sm">
              <Editor
                defaultValue={this.state.source}
                onChange={this.handleChange}
              />
            </div>
            <div className="border col-sm">{result}</div>
          </div>
        </div>
      </div>
    )
  }
}

function sampleData() {
  return {
    type: 'root',
    children: [
      {
        type: 'heading',
        depth: 1,
        children: [
          {
            type: 'text',
            value: 'Hello',
            position: {
              start: {
                line: 1,
                column: 3,
                offset: 2,
              },
              end: {
                line: 1,
                column: 8,
                offset: 7,
              },
              indent: [],
            },
          },
        ],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0,
          },
          end: {
            line: 1,
            column: 8,
            offset: 7,
          },
          indent: [],
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: 'Some ',
            position: {
              start: {
                line: 3,
                column: 1,
                offset: 9,
              },
              end: {
                line: 3,
                column: 6,
                offset: 14,
              },
              indent: [],
            },
          },
          {
            type: 'emphasis',
            children: [
              {
                type: 'text',
                value: 'emphasis',
                position: {
                  start: {
                    line: 3,
                    column: 7,
                    offset: 15,
                  },
                  end: {
                    line: 3,
                    column: 15,
                    offset: 23,
                  },
                  indent: [],
                },
              },
            ],
            position: {
              start: {
                line: 3,
                column: 6,
                offset: 14,
              },
              end: {
                line: 3,
                column: 16,
                offset: 24,
              },
              indent: [],
            },
          },
          {
            type: 'text',
            value: ', ',
            position: {
              start: {
                line: 3,
                column: 16,
                offset: 24,
              },
              end: {
                line: 3,
                column: 18,
                offset: 26,
              },
              indent: [],
            },
          },
          {
            type: 'strong',
            children: [
              {
                type: 'text',
                value: 'importance',
                position: {
                  start: {
                    line: 3,
                    column: 20,
                    offset: 28,
                  },
                  end: {
                    line: 3,
                    column: 30,
                    offset: 38,
                  },
                  indent: [],
                },
              },
            ],
            position: {
              start: {
                line: 3,
                column: 18,
                offset: 26,
              },
              end: {
                line: 3,
                column: 32,
                offset: 40,
              },
              indent: [],
            },
          },
          {
            type: 'text',
            value: ', and ',
            position: {
              start: {
                line: 3,
                column: 32,
                offset: 40,
              },
              end: {
                line: 3,
                column: 38,
                offset: 46,
              },
              indent: [],
            },
          },
          {
            type: 'inlineCode',
            value: 'code',
            position: {
              start: {
                line: 3,
                column: 38,
                offset: 46,
              },
              end: {
                line: 3,
                column: 44,
                offset: 52,
              },
              indent: [],
            },
          },
          {
            type: 'text',
            value: '.',
            position: {
              start: {
                line: 3,
                column: 44,
                offset: 52,
              },
              end: {
                line: 3,
                column: 45,
                offset: 53,
              },
              indent: [],
            },
          },
        ],
        position: {
          start: {
            line: 3,
            column: 1,
            offset: 9,
          },
          end: {
            line: 3,
            column: 45,
            offset: 53,
          },
          indent: [],
        },
      },
      {
        type: 'thematicBreak',
        position: {
          start: {
            line: 5,
            column: 1,
            offset: 55,
          },
          end: {
            line: 5,
            column: 4,
            offset: 58,
          },
          indent: [],
        },
      },
      {
        type: 'code',
        lang: 'javascript',
        value: "console.log('!');",
        position: {
          start: {
            line: 7,
            column: 1,
            offset: 60,
          },
          end: {
            line: 9,
            column: 4,
            offset: 95,
          },
          indent: [1, 1],
        },
      },
      {
        type: 'list',
        ordered: false,
        start: null,
        loose: false,
        children: [
          {
            type: 'listItem',
            loose: false,
            checked: null,
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'foo',
                    position: {
                      start: {
                        line: 11,
                        column: 3,
                        offset: 99,
                      },
                      end: {
                        line: 11,
                        column: 6,
                        offset: 102,
                      },
                      indent: [],
                    },
                  },
                ],
                position: {
                  start: {
                    line: 11,
                    column: 3,
                    offset: 99,
                  },
                  end: {
                    line: 11,
                    column: 6,
                    offset: 102,
                  },
                  indent: [],
                },
              },
            ],
            position: {
              start: {
                line: 11,
                column: 1,
                offset: 97,
              },
              end: {
                line: 11,
                column: 6,
                offset: 102,
              },
              indent: [],
            },
          },
          {
            type: 'listItem',
            loose: false,
            checked: null,
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'bar',
                    position: {
                      start: {
                        line: 12,
                        column: 3,
                        offset: 105,
                      },
                      end: {
                        line: 12,
                        column: 6,
                        offset: 108,
                      },
                      indent: [],
                    },
                  },
                ],
                position: {
                  start: {
                    line: 12,
                    column: 3,
                    offset: 105,
                  },
                  end: {
                    line: 12,
                    column: 6,
                    offset: 108,
                  },
                  indent: [],
                },
              },
            ],
            position: {
              start: {
                line: 12,
                column: 1,
                offset: 103,
              },
              end: {
                line: 12,
                column: 6,
                offset: 108,
              },
              indent: [],
            },
          },
          {
            type: 'listItem',
            loose: false,
            checked: null,
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'baz',
                    position: {
                      start: {
                        line: 13,
                        column: 3,
                        offset: 111,
                      },
                      end: {
                        line: 13,
                        column: 6,
                        offset: 114,
                      },
                      indent: [],
                    },
                  },
                ],
                position: {
                  start: {
                    line: 13,
                    column: 3,
                    offset: 111,
                  },
                  end: {
                    line: 13,
                    column: 6,
                    offset: 114,
                  },
                  indent: [],
                },
              },
            ],
            position: {
              start: {
                line: 13,
                column: 1,
                offset: 109,
              },
              end: {
                line: 13,
                column: 6,
                offset: 114,
              },
              indent: [],
            },
          },
        ],
        position: {
          start: {
            line: 11,
            column: 1,
            offset: 97,
          },
          end: {
            line: 13,
            column: 6,
            offset: 114,
          },
          indent: [1, 1],
        },
      },
    ],
    position: {
      start: {
        line: 1,
        column: 1,
        offset: 0,
      },
      end: {
        line: 14,
        column: 1,
        offset: 115,
      },
    },
  }
}

export default Demo
