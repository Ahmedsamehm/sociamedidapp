import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editCommentService } from "../_services/editCommentService";
import { toast } from "sonner";

const useEditComment = () => {
  const queryClient = useQueryClient();
  const { mutate: editComment, isPending } = useMutation({
    mutationKey: ["editedComment"],
    mutationFn: (body) => {
      return editCommentService({ body });
    },
    onSuccess: () => {
      toast.success("Comment has been edited.");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });
  return { editComment, isPending };
};

export default useEditComment;
