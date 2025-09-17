import axios from "axios";
const fetchAllPosts = async ({ pageParam, limit }: { pageParam: number; limit: number }) => {
  const { data } = await axios.get(`/api/posts/allPosts`, {
    params: { page: pageParam, limit },
  });

  return data || [];
};

export default fetchAllPosts;
