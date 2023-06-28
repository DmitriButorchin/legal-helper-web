import axios from "axios";

const api = {
  getLawyers: async () => {
    const response = await axios.get("/lawyers");
    return response.data;
  },
  getLawyer: async (lawyerId) => {
    const response = await axios.get(`/lawyers/${lawyerId}`);
    return response.data;
  },
  updateLawyer: async (lawyerId, data) => {
    const response = await axios.patch(`/lawyers/${lawyerId}`, data);
    return response.data;
  },
};

export default api;
