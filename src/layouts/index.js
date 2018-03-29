import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './index.css'
import './grid.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="cornflowerblues"
      meta={[
        { name: 'description', content: 'A blogging website from Roy' },
        { name: 'keywords', content: 'web development, blogging' },
      ]}
    />
    <div className="grid">
      <Header />
      <div className="posts">
        {children()}
      </div>
      <Sidebar />
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
