import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectLawyers } from "./lawyers-slice";
import { useSelector } from "react-redux";
import { selectRegionsTitlesReference } from "../regions/regions-slice";

function LawyersList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const regionsReference = useSelector((state) =>
    selectRegionsTitlesReference(state)
  );
  const columns = [
    { field: "ssn", headerName: t("SSN") },
    { field: "firstName", headerName: t("First Name") },
    { field: "lastName", headerName: t("Last Name") },
    {
      field: "regionId",
      valueGetter: (params) => regionsReference[params.value],
      headerName: t("Region", { count: 1 }),
    },
    { field: "caseCount", headerName: t("Case Count") },
  ];

  const handleEvent = ({ id }) => {
    navigate(`/lawyers/${id}`);
  };

  const lawyers = useSelector((state) => selectLawyers(state));
  return (
    <div>
      <DataGrid rows={lawyers} columns={columns} onRowClick={handleEvent} />
    </div>
  );
}

export default LawyersList;
