import axios from "axios";

const api = {
  getLawyers: async () => {
    const response = await axios.get("http://localhost:8080/lawyers");
    return response.data;
  },
  getLawyer: async (lawyerId) => {
    const response = await axios.get(
      `http://localhost:8080/lawyers/${lawyerId}`
    );
    return response.data;
  },
  updateLawyer: async (lawyerId, data) => {
    const response = await axios.patch(
      `http://localhost:8080/lawyers/${lawyerId}`,
      data
    );
    return response.data;
  },
};

export default api;
