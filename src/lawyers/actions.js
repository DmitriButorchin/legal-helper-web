import api from "./api";
import { lawyersReceived, claimAdded, lawyerCreated } from "./lawyers-slice";

export const getAllLawyers = () => async (dispatch) => {
  const lawyers = await api.getLawyers();
  dispatch(lawyersReceived(lawyers));
};

export const addClaim = (lawyerSsn) => (dispatch) => {
  dispatch(claimAdded(lawyerSsn));
};

export const createLawyer = (json) => async (dispatch) => {
  const data = await api.createLawyer(json);
  if (!data.errors) {
    dispatch(lawyerCreated(data));
  }
  return data;
};
