import api from "./api";
import { agenciesReceived } from "./agencies-slice";

export const getAllAgencies = () => async (dispatch) => {
  const agencies = await api.getAgencies();
  dispatch(agenciesReceived(agencies));
};
