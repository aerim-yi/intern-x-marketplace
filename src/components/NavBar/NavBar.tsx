import { NavLink } from "react-router-dom";
import useWalletConnect from "./ReflectWalletState";
import './NavBar.css';  
import ReflectWalletState from "./ReflectWalletState";
import {useEffect, useState} from "react";

const NavBar = () => {
    return (
      <nav className="navbar-container">
        <NavLink to ="/">
          Marketplace
        </NavLink>
          {/* later replace with link to wallet connection */}
        <div>{ReflectWalletState()}</div>
        <NavLink to="/CollectionsPage">
          View Assets
        </NavLink>
        {/* Later use for image <div><img alt="" src={'Link'}/></div> */}
      </nav>
    );
  }
  
  export default NavBar;
  