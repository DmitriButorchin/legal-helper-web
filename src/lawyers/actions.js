import api from "./api";
import { lawyersReceived, claimAdded } from "./lawyers-slice";

export const getAllLawyers = () => async (dispatch) => {
  const lawyers = await api.getLawyers();
  dispatch(lawyersReceived(lawyers));
};

export const addClaim = (lawyerId) => (dispatch) => {
  dispatch(claimAdded(lawyerId));
};
