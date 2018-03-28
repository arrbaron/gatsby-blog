import React from 'react';
import './style.css';

const Sidebar = props => (
  <aside className="sidebar">
    <h3>Technologies I want to learn</h3>
    <ul>
      <li>GraphQL</li>
      <li>GatsbyJS</li>
      <li>Styled Components</li>
      <li>React Native</li>
    </ul>
  </aside>
);

export default Sidebar;