import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClaims } from "./claims/actions";
import { getAllLawyers } from "./lawyers/actions";
import { getAllRegions } from "./regions/actions";
import { getAllAgencies } from "./agencies/actions";
import Header from "./header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAgencies());
    dispatch(getAllRegions());
    dispatch(getAllLawyers());
    dispatch(getAllClaims());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
