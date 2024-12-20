import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Appbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-bg-warning">
      <div className="container-fluid">
        <span className="navbar-brand">
          <Link to="/" className="nav-link">Turtle Pizza Admin</Link>
        </span>
        <ul className="navbar-nav mr-auto flex-row flex-nowrap gap-2">
          <li className="nav-item">
            <NavLink to="/admin/dishes" className="nav-link">Dishes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/orders" className="nav-link">Orders</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;