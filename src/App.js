import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/">{t("Home")}</Link>
      <Link to="/lawyers">{t("Lawyers")}</Link>
      <Outlet />
    </div>
  );
}

export default App;
