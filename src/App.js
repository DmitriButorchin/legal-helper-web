import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClaims } from "./claims/actions";
import { getAllLawyers } from "./lawyers/actions";
import { getAllRegions } from "./regions/actions";
import { getAllCorrespondents } from "./correspondents/actions";
import Header from "./header";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCorrespondents());
    dispatch(getAllRegions());
    dispatch(getAllLawyers());
    dispatch(getAllClaims());
  }, [dispatch]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <Outlet />
      </LocalizationProvider>
    </div>
  );
}

export default App;
