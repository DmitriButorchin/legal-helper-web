import axios from "axios";
import { extractErrors } from "../utils";

const api = {
  getCorrespondents: async () => {
    const response = await axios.get("/correspondents");
    return response.data;
  },
  createCorrespondent: async (json) => {
    try {
      const response = await axios.post("/correspondents", json);
      return response.data;
    } catch (error) {
      return extractErrors(error);
    }
  },
};

export default api;
