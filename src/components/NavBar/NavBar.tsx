import { NavLink } from "react-router-dom";
import './NavBar.css';  
import Wallet from "./Wallet";
import {useEffect, useState} from "react";

const NavBar = () => {
    return (
      <nav className="navbar-container">
        <NavLink to ="/">
          Marketplace
        </NavLink>
          {/* later replace with link to wallet connection */}
        <div><Wallet /></div>
        <NavLink to="/CollectionsPage">
          View Assets
        </NavLink>
        {/* Later use for image <div><img alt="" src={'Link'}/></div> */}
      </nav>
    );
  }
  
  export default NavBar;
  