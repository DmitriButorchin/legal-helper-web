import axios from "axios";

const api = {
  getCorrespondents: async () => {
    const response = await axios.get("/correspondents");
    return response.data;
  },
};

export default api;
