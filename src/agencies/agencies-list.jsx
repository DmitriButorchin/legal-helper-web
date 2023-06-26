import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { selectAgencies } from "./agencies-slice";
import { useSelector } from "react-redux";

function AgenciesList() {
  const { t } = useTranslation();

  const columns = [
    { field: "id", headerName: t("ID") },
    { field: "title", headerName: t("Title") },
  ];

  const agencies = useSelector((state) => selectAgencies(state));
  return (
    <div>
      <DataGrid rows={agencies} columns={columns} />
    </div>
  );
}

export default AgenciesList;
