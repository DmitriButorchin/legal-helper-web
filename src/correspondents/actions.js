import api from "./api";
import { correspondentsReceived } from "./correspondents-slice";

export const getAllCorrespondents = () => async (dispatch) => {
  const correspondents = await api.getCorrespondents();
  dispatch(correspondentsReceived(correspondents));
};
