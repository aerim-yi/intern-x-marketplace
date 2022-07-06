import { NavLink } from "react-router-dom";
import './navbar.css';

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to ="/">
        Marketplace
      </NavLink>
        {/* later replace with link to wallet connection */}
      <NavLink to="/CollectionsPage"></NavLink>
      <div><img alt="" src={"'https://www.shutterstock.com/search/wallet-icon'"}/></div>
        {/* later replace with link to actual asset page */}
      <NavLink to="/CollectionsPage">View Assets</NavLink>
      <div><img alt="" src={'https://www.iconsdb.com/green-icons/money-bag-icon.html'}/></div>
    </nav>
  );
}
