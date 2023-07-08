import React, { Outlet } from 'react';

function Nav() {
  return (
    <>
      <a href="/">
        <h1>Math magicians</h1>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/calculator">Calculator</a>
          </li>
          <li>
            <a href="/quote">Quote</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;
