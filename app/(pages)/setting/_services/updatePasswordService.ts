import axios, { AxiosError } from "axios";

const UpdatePasswordService = async <T>({ body }: { body: T }) => {
  if (!body) {
    throw new Error("oldPassword & newPassword is required");
  }
  try {
    const { data } = await axios.patch<T>("/api/auth/updatepassword", body);
    return data;
  } catch (error: any) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};

export default UpdatePasswordService;
