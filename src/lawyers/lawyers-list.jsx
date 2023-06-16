import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectLawyers } from "./lawyersSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllLawyers } from "./actions";
import { useEffect } from "react";

function LawyersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLawyers());
  }, [dispatch]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    { field: "firstName", headerName: t("First Name") },
    { field: "lastName", headerName: t("Last Name") },
    { field: "region", headerName: t("Region") },
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
