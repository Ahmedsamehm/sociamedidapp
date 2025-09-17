import { useMutation } from "@tanstack/react-query";

import signupService from "../_services/signupService";
import { signupBody } from "../../_types/types";
import { useRouter } from "next/navigation";

const useSignUp = () => {
  const router = useRouter();
  const {
    mutate: signup,
    isPending,
    isError,
    error,
  } = useMutation<{ data: any }, Error, { body: signupBody }>({
    mutationKey: ["signup"],
    mutationFn: (body: signupBody) => {
      return signupService({ body });
    },
    onSuccess() {
      router.push("/signin");
    },
    onError() {
      router.push("/signup");
    },
  });
  return { signup, isPending, isError, error };
};

export default useSignUp;
