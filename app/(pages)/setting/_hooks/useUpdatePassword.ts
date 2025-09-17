import { useMutation } from "@tanstack/react-query";
import UpdatePasswordService from "../_services/updatePasswordService";
export type UpdatePasswordServiceProps = {
  body: {
    oldPassword: string;
    newPassword: string;
  };
};
const useUpdatePassword = () => {
  const { mutate: updatePassword, isPending } = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: (body: UpdatePasswordServiceProps) => {
      return UpdatePasswordService({ body });
    },
  });
  return { updatePassword, isPending };
};

export default useUpdatePassword;
