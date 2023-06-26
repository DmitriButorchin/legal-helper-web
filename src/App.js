import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCases } from "./cases/actions";
import { getAllLawyers } from "./lawyers/actions";
import { getAllRegions } from "./regions/actions";
import { getAllAgencies } from "./agencies/actions";
import Header from "./header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCases());
    dispatch(getAllLawyers());
    dispatch(getAllRegions());
    dispatch(getAllAgencies());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
