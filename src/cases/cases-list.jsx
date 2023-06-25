import "./cases-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectCases } from "./cases-slice";
import { useSelector } from "react-redux";
import { selectRegionsTitlesReference } from "../regions/regions-slice";
import { selectLawyersNamesReference } from "../lawyers/lawyers-slice";

function CasesList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const regionsReference = useSelector((state) =>
    selectRegionsTitlesReference(state)
  );
  const lawyersReference = useSelector((state) =>
    selectLawyersNamesReference(state)
  );
  const columns = [
    { field: "number", headerName: t("Number") },
    {
      field: "regionId",
      valueGetter: (params) => regionsReference[params.value],
      headerName: t("Region", { count: 1 }),
    },
    {
      field: "lawyerId",
      valueGetter: (params) => lawyersReference[params.value],
      headerName: t("Lawyer", { count: 1 }),
    },
  ];

  const handleEvent = ({ id }) => {
    navigate(`/cases/${id}`);
  };

  const cases = useSelector((state) => selectCases(state));
  return (
    <div className="cases-list">
      <Link to="/cases/new" className="link">
        {t("Add Case")}
      </Link>
      <DataGrid rows={cases} columns={columns} onRowClick={handleEvent} />
    </div>
  );
}

export default CasesList;
