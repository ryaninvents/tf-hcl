import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import SitePost from '../components/SitePost'

const HIDE_HEADER_REGEX = /<!-- homepage hide start -->\n(?:.*\n)+<!-- homepage hide end -->/m

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')

    console.log(get(this, 'props.data'))

    const content = get(this, 'props.data.readme.html', '').replace(
      HIDE_HEADER_REGEX,
      ''
    )

    return (
      <div>
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile.jpg`,
            },
          ]}
        />
        <div className="jumbotron jumbotron-fluid splash">
          <div className="container">
            <h1 className="display-4">tf-hcl</h1>
            <p className="lead">Parser for Hashicorp Config Language.</p>
          </div>
        </div>
        <div className="container">
          <div
            className="article"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    readme: markdownRemark(frontmatter: { title: { eq: "README" } }) {
      html
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
