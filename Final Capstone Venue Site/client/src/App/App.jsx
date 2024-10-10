import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Authorized } from "../Views/Authorized.jsx";
import { ApplicationViews } from "../Components/Views/ApplicationViews.jsx";


export const App = () => {
  return (
    <Routes>
      

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};

export default App;
