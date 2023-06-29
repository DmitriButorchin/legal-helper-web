import axios from "axios";

const api = {
  getClaims: async () => {
    const response = await axios.get("/claims");
    return response.data;
  },
  createClaim: async (json) => {
    try {
      const response = await axios.post("/claims", json);
      return response.data;
    } catch (error) {
      const errors = error.response.data.errors.reduce((acc, item) => {
        const index = item.source.pointer.lastIndexOf("/");
        const key = item.source.pointer.substring(index + 1);
        acc[key] = item.title;
        return acc;
      }, {});
      return { errors };
    }
  },
};

export default api;
