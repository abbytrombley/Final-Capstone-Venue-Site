//Purpose: Guest view so no crud

import { NavBar } from "../Nav/NavBar.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import { FAQ } from "../FAQ/FAQ.jsx";
import { useEffect, useState } from "react";
import { GuestMerch } from "../Merch/GuestMerch.jsx";
import { GuestCalendar } from "../Calendar/GuestEvents.jsx";





export const GuestViews = () => {
  const [currentUser, setCurrentUser] = useState({});

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
        <Route index path="/" element={<HomePage />}/>
        <Route path="Merch">
          <Route index element={<GuestMerch />} />
          </Route>
        <Route path="Calendar">
          <Route index element={<GuestCalendar />} />
        </Route>
        <Route path="FAQ">
          <Route index element={<FAQ />} />
        </Route>
      </Route>
    </Routes>
  );
};