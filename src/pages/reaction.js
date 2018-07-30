import React from 'react'
import Link from 'gatsby-link'

import ReactionHeader from '../components/ReactionHeader'

const Reaction = () => (
  <div>
    <ReactionHeader author="Hector" title="Lament" />
    <iframe
      src="https://codesandbox.io/embed/50kn2rnzyl?autoresize=1&hidenavigation=1&view=preview"
      className="reaction-frame"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      onLoad={e => (e.target.style.visibility = 'visible')}
    />
  </div>
)

export default Reaction
