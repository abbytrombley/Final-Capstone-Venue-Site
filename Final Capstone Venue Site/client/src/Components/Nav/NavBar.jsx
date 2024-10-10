//Purpose: Created the navbar that will be displayed on every page, and set appropriate routes for the corresponding buttons.
import "./NavBar.css"
import { Link } from "react-router-dom";

export const NavBar = () => {
                              

  return (
    <div className="nav-container">
      <ul className="navbar-TCC">
        <i>
        <img
            alt="logo"
            src="src/assets/NavBarLogo.png"
            style={{
              height: 100,
              width: 100,
              paddingRight: 5,
            }}
          />
        </i>
        <li className="navbar-pages"> <Link to="/">Home</Link></li>
        <li className="navbar-pages"> <Link to="/Calendar">Calendar</Link></li>
        <li className="navbar-pages"> <Link to="/Merch">Merch</Link></li>
        <li className="navbar-pages"> <Link to="/FAQ">FAQ</Link></li>
        <li className="navbar-pages"> <Link to="/Checkout">Checkout</Link></li>
        <Link to="/Login" className="logout-link">
            {" "}
            Logout
          </Link>
      </ul>
    </div>
  );
};