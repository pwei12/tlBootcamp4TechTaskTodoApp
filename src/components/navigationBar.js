import React from 'react';
import '../css/navigationBar.css';
import { NavLink } from 'react-router-dom';


 const NavigationBar = () => {
  return (
      <nav className="nav-left">
        <NavLink to="/" activeClassName="active">HOME</NavLink>
        <NavLink to="/about" activeClassName="active">ABOUT ME</NavLink>
        <NavLink to="/todoApp" activeClassName="active">TODO APP</NavLink>
      </nav>

  );
}
export default NavigationBar;
