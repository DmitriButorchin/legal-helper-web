import api from "./api";
import { casesReceived, caseCreated } from "./cases-slice";
import { addCase } from '../lawyers/actions';

export const getAllCases = () => async (dispatch) => {
  const cases = await api.getCases();
  dispatch(casesReceived(cases));
};

export const createCase = (json) => async (dispatch) => {
  const data = await api.createCase(json);
  dispatch(caseCreated(data));
  dispatch(addCase(data.lawyerId));
  return data;
};
