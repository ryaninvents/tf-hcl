import React from 'react'
import styled from 'react-emotion'
import {
  ObjectInspector,
  ObjectLabel,
  ObjectRootLabel,
  chromeLight,
} from 'react-inspector'
import get from 'lodash/get'

const NodeName = styled('span')`
  color: #3f51b5;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
`

const PropertyName = styled('span')`
  color: #adb5bd;
  cursor: pointer;
`

const FONT_FAMILY = 'IBM Plex Mono, Menlo, monospace'

const theme = Object.assign({}, chromeLight, {
  BASE_FONT_FAMILY: FONT_FAMILY,
  TREENODE_FONT_FAMILY: FONT_FAMILY,
  BASE_FONT_SIZE: 13,
  BASE_LINE_HEIGHT: 1.5,
  TREENODE_FONT_SIZE: 13,
  TREENODE_LINE_HEIGHT: 1.5,
})

const cap = s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`

function renderUnistNode({ depth, name: nameArg, data, isNonenumerable }) {
  let name = nameArg
  const nodeType = get(data, 'type')
  let Name = PropertyName
  if (nodeType) {
    name = cap(nodeType)
    Name = NodeName
  }

  return (
    <ObjectLabel
      name={<Name>{name}</Name>}
      data={data}
      isNonenumerable={isNonenumerable}
    />
  )
}

export default function UnistTree({ data, hidePositions }) {
  return (
    <ObjectInspector theme={theme} data={data} nodeRenderer={renderUnistNode} />
  )
}
