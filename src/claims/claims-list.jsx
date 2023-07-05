import "./claims-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectClaims } from "./claims-slice";
import { useSelector } from "react-redux";
import { selectRegionsTitlesReference } from "../regions/regions-slice";
import { selectLawyersNamesReference } from "../lawyers/lawyers-slice";
import { selectCorrespondentsTitlesReference } from "../correspondents/correspondents-slice";

function ClaimsList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const regionsReference = useSelector((state) =>
    selectRegionsTitlesReference(state)
  );
  const lawyersReference = useSelector((state) =>
    selectLawyersNamesReference(state)
  );
  const correspondentsReference = useSelector((state) =>
    selectCorrespondentsTitlesReference(state)
  );
  const columns = [
    { field: "registrationNumber", headerName: t("Registration Number") },
    {
      field: "correspondentId",
      flex: 3,
      valueGetter: (params) => correspondentsReference[params.value],
      headerName: t("Correspondent", { count: 1 }),
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
    navigate(`/claims/${encodeURIComponent(id)}`);
  };

  const claims = useSelector((state) => selectClaims(state));
  return (
    <div className="claims-list">
      <Link to="/claims/new" className="link">
        {t("Add a Claim")}
      </Link>
      <DataGrid
        rows={claims}
        columns={columns}
        onRowClick={handleEvent}
        getRowId={(row) => row.registrationNumber}
      />
    </div>
  );
}

export default ClaimsList;
