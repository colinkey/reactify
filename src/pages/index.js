import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Reactify!</h1>
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
