import api from "./api";
import { claimsReceived, claimCreated } from "./claims-slice";
import { addClaim } from "../lawyers/actions";

export const getAllClaims = () => async (dispatch) => {
  const claims = await api.getClaims();
  dispatch(claimsReceived(claims));
};

export const createClaim = (json) => async (dispatch) => {
  const data = await api.createClaim(json);
  if (!data.errors) {
    dispatch(claimCreated(data));
    dispatch(addClaim(data.lawyerSsn));
  }
  return data;
};
