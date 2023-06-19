import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectRegions } from "./regions-slice";
import { useSelector } from "react-redux";

function RegionsList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    { field: "id", headerName: t("ID") },
    { field: "title", headerName: t("Title") },
  ];

  const handleEvent = ({ id }) => {
    navigate(`/regions/${id}`);
  };

  const regions = useSelector((state) => selectRegions(state));
  return (
    <div>
      {<DataGrid rows={regions} columns={columns} onRowClick={handleEvent} />}
    </div>
  );
}

export default RegionsList;
