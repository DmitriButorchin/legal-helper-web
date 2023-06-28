import axios from "axios";

const api = {
  getAgencies: async () => {
    const response = await axios.get("/agencies");
    return response.data;
  },
};

export default api;
