import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <hr /><h2>React with React Router</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;