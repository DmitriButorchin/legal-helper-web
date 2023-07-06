import api from "./api";
import { correspondentsReceived, correspondentCreated } from "./correspondents-slice";

export const getAllCorrespondents = () => async (dispatch) => {
  const correspondents = await api.getCorrespondents();
  dispatch(correspondentsReceived(correspondents));
};

export const createCorrespondent = (json) => async (dispatch) => {
  const data = await api.createCorrespondent(json);
  if (!data.errors) {
    dispatch(correspondentCreated(data));
  }
  return data;
};
