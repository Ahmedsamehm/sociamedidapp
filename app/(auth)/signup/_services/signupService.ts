import axios from "axios";
import { signupBody } from "../../_types/types";

export const signupService = async (body: signupBody) => {
  const { data } = await axios.post("/api/auth/signup", body);
  return data;
};

export default signupService;
