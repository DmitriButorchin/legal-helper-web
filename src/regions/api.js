import axios from "axios";

const api = {
  getRegions: async () => {
    const response = await axios.get("http://localhost:8080/regions");
    return response.data;
  },
};

export default api;
