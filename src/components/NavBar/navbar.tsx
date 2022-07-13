import { NavLink } from "react-router-dom";
import useWalletConnect from "./ConnectToWallet"
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/">
        Marketplace
      </NavLink>
      {/* later replace with link to wallet connection */}
      <div>{useWalletConnect()}</div>
      <NavLink to="/CollectionsPage">View Assets</NavLink>
      {/* Later use for image <div><img alt="" src={'Link'}/></div> */}
    </nav>
  );
}

export default NavBar;
