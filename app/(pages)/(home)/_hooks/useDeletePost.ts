import { useMutation, useQueryClient } from "@tanstack/react-query";

import deletePostService from "../_services/deletePostService";

function useDeletePost() {
  const queryClient = useQueryClient();
  const { mutate: deletePost, isPending } = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: (id: string) => {
      return deletePostService(id);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["userPosts"] });
    },
  });
  return { deletePost, isPending };
}

export default useDeletePost;
