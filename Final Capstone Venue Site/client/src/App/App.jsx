import "../App/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationViews } from "../Components/Views/ApplicationViews.jsx";
import { useEffect, useState } from "react";
import { Authorize } from "../Components/Auth/Authorized.jsx";



export const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(()=> {
    if(!localStorage.getItem("venue_user"))
    {setIsLoggedIn(false)}

  },[isLoggedIn])


  return (

    <BrowserRouter>
      {isLoggedIn ? (<ApplicationViews isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />):(<Authorize setIsLoggedIn={setIsLoggedIn} />)}
    </BrowserRouter>
  );
};

export default App;




    // <Routes>

    //   <Route
    //     path="*"
    //     element={
    //         <ApplicationViews />
    //     }
    //   />
    // </Routes>