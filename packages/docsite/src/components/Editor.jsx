import React from 'react'
import CodeMirror from 'react-codemirror'

export default class Editor extends React.Component {
  render() {
    return <CodeMirror {...this.props} />
  }
}
