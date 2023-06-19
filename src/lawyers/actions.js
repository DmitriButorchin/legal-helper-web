import api from "./api";
import { lawyersReceived } from "./lawyers-slice";

export const getAllLawyers = () => async (dispatch) => {
  const lawyers = await api.getLawyers();
  dispatch(lawyersReceived(lawyers));
};
