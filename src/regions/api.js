import axios from "axios";

const api = {
  getRegions: async () => {
    const response = await axios.get("/regions");
    return response.data;
  },
};

export default api;
