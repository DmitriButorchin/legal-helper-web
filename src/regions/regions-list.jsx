import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
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
    <div>
      {<DataGrid rows={regions} columns={columns} onRowClick={handleEvent} />}
    </div>
  );
}

export default RegionsList;
