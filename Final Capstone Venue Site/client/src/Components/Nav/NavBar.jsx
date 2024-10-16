// //Purpose: Created the navbar that will be displayed on every page, and set appropriate routes for the corresponding buttons.

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
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
        <NavbarBrand  className="Title" href="/">Summit Soundstage</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/calendar/">Calendar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/merch">
                Merch
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FAQ">
                FAQ
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                FAQ
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Directions</DropdownItem>
                <DropdownItem>FAQ</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>
          <Link className="navbar-item" to=""
            onClick={() => {
              localStorage.removeItem("venue_user")
              navigate("/login", {replace: true})
              }}>
              Logout
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}











//OLD NAVBAR
// import "./NavBar.css"
// import { Link } from "react-router-dom";

// export const NavBar = () => {
                              

//   return (
//     <div className="nav-container">
//       <ul className="navbar-TCC">
//         <i>
//         <img
//             alt="logo"
//             src="src/assets/NavBarLogo.png"
//             style={{
//               height: 100,
//               width: 100,
//               paddingRight: 5,
//             }}
//           />
//         </i>
//         <li className="navbar-pages"> <Link to="/">Home</Link></li>
//         <li className="navbar-pages"> <Link to="/Calendar">Calendar</Link></li>
//         <li className="navbar-pages"> <Link to="/Merch">Merch</Link></li>
//         <li className="navbar-pages"> <Link to="/FAQ">FAQ</Link></li>
//         <li className="navbar-pages"> <Link to="/Checkout">Checkout</Link></li>
//         <Link to="/Login" className="logout-link">
//             {" "}
//             Logout
//         </Link>
//       </ul>
//     </div>
//   );
// };



























//MY FRONT END CAPSTONE
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./NavBar.css"
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   Nav,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';


// export const NavBar = () => {


//   const navigate =useNavigate()

//   return (
//   <header>
//   <ul className="navbar">
//   <i>
//          <img
//              alt="logo"
//              src="src/assets/NavBarLogo.png"
//              style={{
//                height: 100,
//                width: 100,
//                paddingRight: 5,
//              }}
//            />
//       </i>
//     <li className="navbar-item">
//       <Link to="/" className="navbar-item">
//         Home
//       </Link>
//     </li>
    
//     <li className="navbar-item">
//       <Link to="post" className="navbar-item">
//         Calendar
//       </Link>
//     </li>
    
//     <li className="navbar-item">
//       <Link to="albums" className="navbar-item">
//         Merch
//       </Link>
//     </li>
    

//     <li className="navbar-item">
//       <Link to="images" className="navbar-item">
//         FAQ
//       </Link>
//     </li>

//     <li className="navbar-item">
//       <Link to="calendarApp" className="navbar-item">
//         Checkout
//       </Link>
//     </li>
    
//     <li className="navbar-item">
//       <Link className="navbar-item" to=""
//       onClick={() => {
//         localStorage.removeItem("music_user")
//         navigate("/login", {replace: true})
//       }}
//       >
//         Logout
//       </Link>
//     </li>
//   </ul>
//   </header>
// );
// }