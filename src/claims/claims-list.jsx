import "./claims-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectClaims } from "./claims-slice";
import { useSelector } from "react-redux";
import { selectRegionsTitlesReference } from "../regions/regions-slice";
import { selectLawyersNamesReference } from "../lawyers/lawyers-slice";
import { selectAgenciesTitlesReference } from "../agencies/agencies-slice";

function ClaimsList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const regionsReference = useSelector((state) =>
    selectRegionsTitlesReference(state)
  );
  const lawyersReference = useSelector((state) =>
    selectLawyersNamesReference(state)
  );
  const agenciesReference = useSelector((state) =>
    selectAgenciesTitlesReference(state));
  const columns = [
    { field: "number", headerName: t("Number") },
    {
      field: "agencyId",
      flex: 3,
      valueGetter: (params) => agenciesReference[params.value],
      headerName: t("Agency", { count: 1 }),
    },
    {
      field: "regionId",
      flex: 3,
      valueGetter: (params) => regionsReference[params.value],
      headerName: t("Region", { count: 1 }),
    },
    {
      field: "lawyerId",
      flex: 2,
      valueGetter: (params) => lawyersReference[params.value],
      headerName: t("Lawyer", { count: 1 }),
    },    
  ];

  const handleEvent = ({ id }) => {
    navigate(`/claims/${id}`);
  };

  const claims = useSelector((state) => selectClaims(state));
  return (
    <div className="claims-list">
      <Link to="/claims/new" className="link">
        {t("Add a Claim")}
      </Link>
      <DataGrid rows={claims} columns={columns} onRowClick={handleEvent} />
    </div>
  );
}

export default ClaimsList;
