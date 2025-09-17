import axios from "axios";

const singlePostServices = async (postId: string) => {
  const { data } = await axios.get(`/api/posts/singlePost/${postId}`);
  return data;
};

export default singlePostServices;
