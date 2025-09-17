import axios from "axios";

const deletePostService = async (id: string) => {
  const { data } = await axios.delete(`/api/posts/deletepost/`, { data: { id } });
  return data;
};

export default deletePostService;
