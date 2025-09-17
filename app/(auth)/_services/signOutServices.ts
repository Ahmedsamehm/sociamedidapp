import axios from "axios";

const signOutServices = async () => {
  const { error } = await axios.delete(`/api/auth/signout`);
  return { error };
};

export default signOutServices;
