import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

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

const columns = [
  { field: "id", headerName: 'ID' },
  { field: "firstName", headerName: 'First Name' },
  { field: "lastName", headerName: 'Last Name' },
  { field: "region", headerName: 'Region' },
];

function LawyersList() {
  const navigate = useNavigate();

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
