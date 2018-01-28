import React from 'react'
import './style.scss'

class SitePage extends React.Component {
  render() {
    const post = this.props.data.post
    return (
      <div
        className="flex-greedy"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    )
  }
}

export default SitePage
