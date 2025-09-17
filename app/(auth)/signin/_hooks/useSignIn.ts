import { useMutation } from "@tanstack/react-query";

import { signInBody } from "../_types/type";
import { redirect, useRouter } from "next/navigation";
import signinService from "../_services/signInService";

const useSignIn = () => {
  const router = useRouter();
  const {
    mutate: signIn,
    isPending,
    isError,
    error,
  } = useMutation<{ data: any }, Error, { body: signInBody }>({
    mutationKey: ["signin"],
    mutationFn: (body: signInBody) => {
      return signinService({ body });
    },
    onSuccess() {
      router.push("/");
    },
  });
  return { signIn, isPending, isError, error };
};

export default useSignIn;
