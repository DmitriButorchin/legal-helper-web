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
      <Link to="/claims" className="link">
        {t("Claim", { count: 2 })}
      </Link>
      <Link to="/lawyers" className="link">
        {t("Lawyer", { count: 2 })}
      </Link>
      <Link to="/regions" className="link">
        {t("Region", { count: 2 })}
      </Link>
      <Link to="/correspondents" className="link">
        {t("Correspondent", { count: 2 })}
      </Link>
    </div>
  );
}

export default Header;
