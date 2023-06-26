import axios from "axios";

const api = {
  getAgencies: async () => {
    const response = await axios.get("http://localhost:8080/agencies");
    return response.data;
  },
};

export default api;
