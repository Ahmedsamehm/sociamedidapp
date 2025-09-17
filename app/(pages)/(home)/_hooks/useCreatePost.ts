import { useMutation } from "@tanstack/react-query";
import createPostservice, { createPostBody } from "../_services/createPostservice";
import { toast } from "sonner";

export const useCreatePost = () => {
  const { mutate: createPost, isPending } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (body: createPostBody) => {
      return createPostservice(body);
    },
    onSuccess: () => {
      toast.success("Post has been created.");
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });
  return { createPost, isPending };
};
