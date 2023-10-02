import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">One</Link>
    </li>
    <li>
      <Link to="/cats">Two</Link>
    </li>
    <li>
      <Link to="/sheeps">Three</Link>
    </li>
    <li>
      <Link to="/goats">Four</Link>
    </li>
  </div>
  );
}
export default Navbar;
