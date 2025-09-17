import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteCommentService from "../_services/deleteCommentService";

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteComment, isPending } = useMutation({
    mutationKey: ["deleteComment"],
    mutationFn: (id: string) => {
      return deleteCommentService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
  return { deleteComment, isPending };
};

export default useDeleteComment;
