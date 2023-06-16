import axios from "axios";

const api = {
  getLawyers: async () => {
    const response = await axios.get("http://localhost:8080/lawyers");
    return response.data;
  },
};

export default api;
