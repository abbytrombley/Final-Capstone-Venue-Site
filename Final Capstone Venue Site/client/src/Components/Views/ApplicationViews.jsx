import { useEffect, useState } from "react";
import { AdminViews } from "./AdminView";
import { GuestViews } from "./GuestViews";

export const ApplicationViews = () => {

  const [currentUser, setCurrentUser] = useState({});


  useEffect(() => {
    const localUser = localStorage.getItem("venue_user");
    const userObj = JSON.parse(localUser);
    setCurrentUser(userObj);
  }, []);
  if (currentUser.isAdmin === true) {
    return <AdminViews currentUser={currentUser} />;
  }
  else {
    return (
    <GuestViews />
  )}
}