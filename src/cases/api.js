import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import lawyerApi from "../lawyers/api";

const api = {
  getCases: async () => {
    const response = await axios.get("http://localhost:8080/cases");
    return response.data;
  },
  createCase: async (json) => {
    json.id = uuidv4();
    const response = await axios.post("http://localhost:8080/cases", json);
    const lawyer = await lawyerApi.getLawyer(json.lawyerId);
    await lawyerApi.updateLawyer(json.lawyerId, {
      caseCount: lawyer.caseCount + 1,
    });
    return response.data;
  },
};

export default api;
