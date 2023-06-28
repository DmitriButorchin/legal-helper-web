import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import lawyerApi from "../lawyers/api";

const api = {
  getClaims: async () => {
    const response = await axios.get("/claims");
    return response.data;
  },
  createClaim: async (json) => {
    json.id = uuidv4();
    const response = await axios.post("/claims", json);
    const lawyer = await lawyerApi.getLawyer(json.lawyerId);
    await lawyerApi.updateLawyer(json.lawyerId, {
      claimCount: lawyer.claimCount + 1,
    });
    return response.data;
  },
};

export default api;
