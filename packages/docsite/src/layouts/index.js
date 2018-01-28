import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'
import Footer from '../components/Footer'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon/devicon.min.css'
import 'font-awesome/css/font-awesome.css'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props
    return (
      <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template
