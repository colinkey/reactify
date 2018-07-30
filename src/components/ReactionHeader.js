import React from 'react'
import Link from 'gatsby-link'

import './ReactionHeader.css'

const ReactionHeader = ({ author, title }) => (
  <div className="reaction-header">
    <Link to="/"> Go back </Link>
    <h2>{`${author}'s Reaction - ${title}`}</h2>
  </div>
)

export default ReactionHeader
