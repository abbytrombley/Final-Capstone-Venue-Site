// import React, { useEffect, useState } from "react";
import { NavBar } from "../Nav/NavBar.jsx";
import { Outlet, Route, Routes } from "react-router-dom";

import { Merch } from "../Merch/Merch.jsx";
import { NewMerch } from "../Merch/MerchCreate.jsx";
import { FAQ } from "../FAQ/FAQ.jsx";
import { useEffect, useState } from "react";
import { EditMerch } from "../Merch/MerchEdit.jsx";
import { NewEvents } from "../Events/EventsCreate.jsx";
import { EditEvents } from "../Events/EventsEdit.jsx";
import { Events } from "../Events/Events.jsx";
// import { SplashPage } from "../SplashPage/SplashPage.jsx";

import { Checkout } from "../Checkout/Checkout.jsx";
import { HomePage } from "../HomePage/HomePage.jsx";





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
        {/* <Route index path="/SplashPage" element={<SplashPage />}/> */}
        <Route path="Merch">
          <Route index element={<Merch />} />
          <Route
            path="/Merch/newMerch"
            element={<NewMerch/>}
          />
          <Route
            path="/Merch/:id/editMerch"
            element={<EditMerch />}
          />
          </Route>
        <Route path="event">
          <Route index element={<Events />} />
          <Route
            path="/event/newEvent"
            element={<NewEvents />}
          />
          <Route
            path="/event/:id/editEvent"
            element={<EditEvents />}
          />
        </Route>
        <Route path="FAQ">
          <Route index element={<FAQ />} />
        </Route>
        <Route path="Checkout">
          <Route index element={<Checkout />} />
        </Route>
      </Route>
    </Routes>
  );
};