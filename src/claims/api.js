import axios from "axios";
import { extractErrors } from "../utils";

const api = {
  getClaims: async () => {
    const response = await axios.get("/claims");
    return response.data;
  },
  createClaim: async (json) => {
    try {
      const response = await axios.post("/claims", json);
      return response.data;
    } catch (error) {
      return extractErrors(error);
    }
  },
};

export default api;
