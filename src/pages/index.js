import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'

const IndexPage = ({ data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Link to="/reaction">Test hello hi</Link>
  </div>
)

export default IndexPage

export const query = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
