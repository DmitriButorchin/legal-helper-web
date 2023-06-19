import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllLawyers } from "./lawyers/actions";
import { getAllRegions } from "./regions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLawyers());
    dispatch(getAllRegions());
  }, [dispatch]);
  const { t } = useTranslation();

  return (
    <div>
      <div className="header">
        <Link to="/" className="link">
          {t("Home")}
        </Link>
        <Link to="/lawyers" className="link">
          {t("Lawyer", { count: 2 })}
        </Link>
        <Link to="/regions" className="link">
          {t("Region", { count: 2 })}
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
