import api from "./api";
import { lawyersReceived, caseAdded } from "./lawyers-slice";

export const getAllLawyers = () => async (dispatch) => {
  const lawyers = await api.getLawyers();
  dispatch(lawyersReceived(lawyers));
};

export const addCase = (lawyerId) => (dispatch) => {
  dispatch(caseAdded(lawyerId));
};
