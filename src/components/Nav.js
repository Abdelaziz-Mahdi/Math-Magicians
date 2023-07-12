import { Outlet, Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <h1>
          <Link to="/">Math Magicians</Link>
        </h1>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: '#f5913e' } : {})}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <span>&nbsp; | &nbsp;</span>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: '#f5913e' } : {})}
              to="/calculator"
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <span>&nbsp; | &nbsp;</span>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: '#f5913e' } : {})}
              to="/quote"
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;
