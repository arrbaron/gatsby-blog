import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/logo-light.png';
import './style.css';

const Header = () => (
  <header role="banner">
      <Link to="/">
        <div>
          <img src={logo} alt="Roy Baron logo" className="header__logo" />
          <h1 style={{ margin: 0 }}>
            Roy's Blog Website
          </h1>
        </div>
      </Link>
  </header>
)

export default Header
