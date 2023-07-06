import api from "./api";
import { regionsReceived, regionCreated } from "./regions-slice";

export const getAllRegions = () => async (dispatch) => {
  const regions = await api.getRegions();
  dispatch(regionsReceived(regions));
};

export const createRegion = (json) => async (dispatch) => {
  const data = await api.createRegion(json);
  if (!data.errors) {
    dispatch(regionCreated(data));
  }
  return data;
};
