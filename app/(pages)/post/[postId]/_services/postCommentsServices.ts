import axios from "axios";

const postCommentsServices = async (postId: string) => {
  if (!postId) return null;
  const { data } = await axios.get(`/api/posts/comments/postcomments/${postId}/comments`);
  return data;
};

export default postCommentsServices;
