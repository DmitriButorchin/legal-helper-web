import axios from "axios";
import { extractErrors } from "../utils";

const api = {
  getLawyers: async () => {
    const response = await axios.get("/lawyers");
    return response.data;
  },
  createLawyer: async (json) => {
    try {
      const response = await axios.post("/lawyers", json);
      return response.data;
    } catch (error) {
      return extractErrors(error);
    }
  },
};

export default api;
