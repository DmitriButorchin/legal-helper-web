import api from "./api";
import { casesReceived } from "./cases-slice";

export const getAllCases = () => async (dispatch) => {
  const cases = await api.getCases();
  dispatch(casesReceived(cases));
};
