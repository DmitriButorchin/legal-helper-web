import "./correspondents-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { selectCorrespondents } from "./correspondents-slice";
import { useSelector } from "react-redux";

function CorrespondentsList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    { field: "title", flex: 1, headerName: t("Title") },
  ];

  const handleEvent = ({ id }) => {
    navigate(`/correspondents/${encodeURIComponent(id)}`);
  };

  const correspondents = useSelector((state) => selectCorrespondents(state));
  return (
    <div className="correspondents-list">
      <Link to="/correspondents/new" className="link">
        {t("Add a Correspondent")}
      </Link>
      <DataGrid
        rows={correspondents}
        columns={columns}
        onRowClick={handleEvent}
      />
    </div>
  );
}

export default CorrespondentsList;
