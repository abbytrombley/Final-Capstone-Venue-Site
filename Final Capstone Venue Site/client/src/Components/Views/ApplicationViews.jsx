import React, { useEffect, useState } from "react";
import { NavBar } from "../Nav/NavBar.jsx";
import { Welcome } from "../Components/Welcome/Welcome.jsx";
import { Outlet, Route, Routes } from "react-router-dom";


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
        <Route path="/" element={<Welcome />} index />
      </Route>
    </Routes>
  );
};