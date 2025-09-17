import axios from "axios";

export const editCommentService = async ({ body }) => {
  const { data } = await axios.put("/api/posts/comments/editcomment", body);
  return data;
};
