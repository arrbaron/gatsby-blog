import React from 'react';
import './style.css';

const Sidebar = props => (
  <aside className="sidebar">
    <h3>Areas to explore</h3>
    <ul>
      <li className="to-learn">Advanced Accessibility</li>
      <li className="to-learn">Styled Components</li>
      <li className="to-learn">React Native</li>
      <li className="to-learn">Redux Saga</li>
      <li className="to-learn">Async Await</li>
      <li className="to-learn">Vue</li>
      <li className="to-learn">Greensock</li>
      <li className="learning">GraphQL</li>
      <li className="learned">GatsbyJS</li>
      <li className="learned">CSS Grid</li>
      <li className="learned">Flexbox</li>
    </ul>
  </aside>
);

export default Sidebar;