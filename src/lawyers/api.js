import axios from "axios";

const api = {
  getLawyers: async () => {
    const response = await axios.get("/lawyers");
    return response.data;
  },
};

export default api;
