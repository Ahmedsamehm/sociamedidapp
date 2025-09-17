import axios from "axios";

const createCommentService = async ({ body }) => {
  const { data } = await axios.post("/api/posts/comments/createcomment", body);
  return data;
};

export default createCommentService;
