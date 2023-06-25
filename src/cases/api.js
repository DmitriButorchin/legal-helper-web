import axios from "axios";

const api = {
  getCases: async () => {
    const response = await axios.get("http://localhost:8080/cases");
    return response.data;
  },
};

export default api;
