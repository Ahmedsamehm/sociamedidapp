import axios from "axios";

const deleteCommentService = async (id: string) => {
  const { data } = await axios.delete(`/api/posts/comments/deletecomment`, { data: { id } });
  return data;
};

export default deleteCommentService;
