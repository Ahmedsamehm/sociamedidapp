"use client";
import { useMutation } from "@tanstack/react-query";


import signOutServices from "../_services/signOutServices";
import { useRouter } from "next/navigation";

const useSignOut = () => {
  const router = useRouter();
  const { mutate: signOut, isPending } = useMutation({
    mutationFn: signOutServices,
    onSuccess: () => {
      router.push("/signin");
    },
  });
  return { signOut, isPending };
};

export default useSignOut;
