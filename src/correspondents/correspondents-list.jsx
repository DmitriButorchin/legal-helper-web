import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { selectCorrespondents } from "./correspondents-slice";
import { useSelector } from "react-redux";

function CorrespondentsList() {
  const { t } = useTranslation();

  const columns = [
    { field: "title", flex: 1, headerName: t("Title") },
  ];

  const correspondents = useSelector((state) => selectCorrespondents(state));
  return (
    <div>
      <DataGrid rows={correspondents} columns={columns} />
    </div>
  );
}

export default CorrespondentsList;
