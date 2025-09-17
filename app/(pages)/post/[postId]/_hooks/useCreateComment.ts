import { useMutation, useQueryClient } from "@tanstack/react-query";

import createCommentService from "../_services/createCommentService";
import { toast } from "sonner";

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const { mutate: createComment, isPending } = useMutation({
    mutationKey: ["createComment"],
    mutationFn: (body) => {
      return createCommentService({ body });
    },
    onSuccess: () => {
      toast.success("Comment has been created.");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });
  return { createComment, isPending };
};

export default useCreateComment;
