import "../CSS/Header.css"

import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>DEV@Deakin</h1>
      </div>
      <div className="header-center">
        <input placeholder="Search.." className="header-search" />
      </div>
      <div className="header-right">
        <span className="post">Post</span>
        <span className="login">Log in</span>
      </div>
    </div>
  );
}

export default Header;

