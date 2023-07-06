import "./regions-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectRegions } from "./regions-slice";
import { useSelector } from "react-redux";

function RegionsList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    { field: "title", flex: 1, headerName: t("Title") },
  ];

  const handleEvent = ({ id }) => {
    navigate(`/regions/${encodeURIComponent(id)}`);
  };

  const regions = useSelector((state) => selectRegions(state));
  return (
    <div className="regions-list">
      <Link to="/regions/new" className="link">
        {t("Add a Region")}
      </Link>
      {<DataGrid rows={regions} columns={columns} onRowClick={handleEvent} />}
    </div>
  );
}

export default RegionsList;
