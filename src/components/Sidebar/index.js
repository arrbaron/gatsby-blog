import React from 'react';
import './style.css';

const Sidebar = props => (
  <aside className="sidebar">
    <h3>Technologies I'm exploring</h3>
    <ul>
      <li className="to-learn">Styled Components</li>
      <li className="to-learn">React Native</li>
      <li className="learning">GraphQL</li>
      <li className="learning">GatsbyJS</li>
      <li className="learned">CSS Grid</li>
      <li className="learned">Flexbox</li>
    </ul>
  </aside>
);

export default Sidebar;