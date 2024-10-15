// import React, { useEffect, useState } from "react";
import { NavBar } from "../Nav/NavBar.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import { Merch } from "../Merch/Merch.jsx";
import { NewMerch } from "../Merch/MerchCreate.jsx";
import { FAQ } from "../FAQ/FAQ.jsx";
import { Calendar } from "../Calendar/Events.jsx";
import { useEffect, useState } from "react";



export const AdminViews = () => {
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
          <Route index element={<Merch />} />
          <Route
            path="merch/newMerch"
            element={<NewMerch/>}
          />
          </Route>
        <Route path="Calendar">
          <Route index element={<Calendar />} />
        </Route>
        <Route path="FAQ">
          <Route index element={<FAQ />} />
        </Route>
      </Route>
    </Routes>
  );
};