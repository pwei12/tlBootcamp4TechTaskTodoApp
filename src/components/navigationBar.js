import React from 'react';
import { NavLink } from 'react-router-dom';


 const NavigationBar = () => {
  return (
      <nav className="nav-left">
        <NavLink to="/" className="nav-link" activeClassName="active">HOME</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">ABOUT ME</NavLink>
        <NavLink to="/todoApp" className="nav-link" activeClassName="active">TODO APP</NavLink>
      </nav>

  );
}
export default NavigationBar;
