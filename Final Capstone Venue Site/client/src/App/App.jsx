import "../App/App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "../Components/Views/ApplicationViews.jsx";


export const App = () => {
  return (
    <Routes>
      

      <Route
        path="*"
        element={
            <ApplicationViews />
        }
      />
    </Routes>
  );
};

export default App;
