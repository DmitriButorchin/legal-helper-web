import "./header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Link to="/" className="link">
        {t("Home")}
      </Link>
      <Link to="/cases" className="link">
        {t("Case", { count: 2 })}
      </Link>
      <Link to="/lawyers" className="link">
        {t("Lawyer", { count: 2 })}
      </Link>
      <Link to="/regions" className="link">
        {t("Region", { count: 2 })}
      </Link>
      <Link to="/agencies" className="link">
        {t("Agency", { count: 2 })}
      </Link>
    </div>
  );
}

export default Header;
