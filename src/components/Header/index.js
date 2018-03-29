import React from 'react'
import Link from 'gatsby-link'
import './style.css';

const Header = () => (
  <header role="banner">
      <Link to="/">
        <div>
          <h1>
            {`: cornflowerblues;`}
          </h1>
          <p>a web development blog by Roy Baron</p>
        </div>
      </Link>
  </header>
)

export default Header
