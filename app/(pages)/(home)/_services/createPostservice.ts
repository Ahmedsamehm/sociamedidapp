import axios from "axios";

export type createPostBody = { body: string; image: File };
const createPostservice = async (body: createPostBody) => {
  const formData = new FormData();
  if (!body.image) {
    formData.append("body", body.body);
  } else {
    formData.append("body", body.body);
    formData.append("image", body.image);
  }

  const { data } = await axios.post("/api/posts/createpost", formData);
  return data;
};

export default createPostservice;
