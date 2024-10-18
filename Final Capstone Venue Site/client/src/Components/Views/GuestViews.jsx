//Purpose: Guest view so no crud


import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage.jsx";
import { FAQ } from "../FAQ/FAQ.jsx";
import { useEffect, useState } from "react";
import { GuestMerch } from "../Merch/GuestMerch.jsx";
import { GuestCalendar } from "../Events/GuestEvents.jsx";
import { Checkout } from "../Checkout/Checkout.jsx";
import { NavBar } from "../Nav/NavBar.jsx";

// import { SplashPage } from "../SplashPage/SplashPage.jsx";





export const GuestViews = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [cart, setCart] = useState([])

  useEffect(() => {
    const localVenueUser = localStorage.getItem("venue_user");
    const venueUserObject = JSON.parse(localVenueUser);

    setCurrentUser(venueUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
            
          </>
        }
        >
        
        <Route index path="/" element={<HomePage cart={cart} setCart={setCart} />}/>
        

        {/* <Route index path="/SplashPage" element={<SplashPage />}/> */}
        <Route path="Merch">
          <Route index element={<GuestMerch cart={cart} setCart={setCart} />} />
          </Route>
        <Route path="event">
          <Route index element={<GuestCalendar cart={cart} setCart={setCart} />} />
        </Route>
        <Route path="FAQ">
          <Route index element={<FAQ />} />
        </Route>
        
        <Route path="Checkout" index element={<Checkout cart={cart} setCart={setCart} />} />
      
      </Route>
    </Routes>
  );
};