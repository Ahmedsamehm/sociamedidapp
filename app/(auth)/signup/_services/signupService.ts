import axios from "axios";
import { signupBody } from "../../_types/types";

const signupService = async ({ body }: { body: signupBody }) => {
  const { data } = await axios.post("/api/auth/signup", body);

  return { data };
};

export default signupService;
