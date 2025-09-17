import axios from "axios";

import { signInBody } from "../_types/type";

const signinService = async ({ body }: { body: signInBody }) => {
  const { data } = await axios.post("/api/auth/signin", body);

  return { data };
};

export default signinService;
