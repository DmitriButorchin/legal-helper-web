import axios from "axios";
import { extractErrors } from "../utils";

const api = {
  getRegions: async () => {
    const response = await axios.get("/regions");
    return response.data;
  },
  createRegion: async (json) => {
    try {
      const response = await axios.post("/regions", json);
      return response.data;
    } catch (error) {
      return extractErrors(error);
    }
  },
};

export default api;
