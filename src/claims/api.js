import axios from "axios";

const api = {
  getClaims: async () => {
    const response = await axios.get("/claims");
    return response.data;
  },
  createClaim: async (json) => {
    const response = await axios.post("/claims", json);
    return response.data;
  },
};

export default api;
