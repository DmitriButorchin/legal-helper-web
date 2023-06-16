import api from "./api";
import { lawyersReceived } from "./lawyersSlice";

export const getAllLawyers = () => async (dispatch) => {
  const lawyers = await api.getLawyers();
  dispatch(lawyersReceived(lawyers));
};
