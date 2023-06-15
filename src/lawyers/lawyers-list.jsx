import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const lawyers = [{
    id: 1,
    firstName: 'John',
    lastName: 'Malkovich',
    region: 'California',
}, {
    id: 2,
    firstName: 'Bruce',
    lastName: 'Willis',
    region: 'Florida',
}, {
    id: 3,
    firstName: 'Natalie',
    lastName: 'Portman',
    region: 'Hawaii',
}];

function LawyersList() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const columns = [
    { field: "firstName", headerName: t("First Name") },
    { field: "lastName", headerName: t("Last Name") },
    { field: "region", headerName: t("Region") },
  ];

  const handleEvent = ({id}) => {    
    navigate(`/lawyers/${id}`);
  };

  return (
    <div>
        <DataGrid
            rows={lawyers}
            columns={columns}
            onRowClick={handleEvent}
        />
    </div>
  );
}

export default LawyersList;
