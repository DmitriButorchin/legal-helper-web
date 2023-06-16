import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="header">
        <Link to="/" className="link">
          {t("Home")}
        </Link>
        <Link to="/lawyers" className="link">
          {t("Lawyers")}
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
