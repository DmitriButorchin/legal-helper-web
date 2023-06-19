import api from "./api";
import { regionsReceived } from "./regions-slice";

export const getAllRegions = () => async (dispatch) => {
  const regions = await api.getRegions();
  dispatch(regionsReceived(regions));
};
