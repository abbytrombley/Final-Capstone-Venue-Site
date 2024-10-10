import React, { useEffect, useState } from "react";
import { NavBar } from "../Nav/NavBar.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage.jsx";


export const ApplicationViews = () => {
  // const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   const localVenueUser = localStorage.getItem("venue_user");
  //   const venueUserObject = JSON.parse(localVenueUser);

  //   setCurrentUser(venueUserObject);
  // }, []);

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
        <Route path="/Merch">
        </Route>
      </Route>
    </Routes>
  );
};