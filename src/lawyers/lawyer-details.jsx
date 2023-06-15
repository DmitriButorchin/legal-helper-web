import { useNavigate, useParams } from 'react-router-dom';

function LawyerDetails() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      ID: {params.lawyerId}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default LawyerDetails;
