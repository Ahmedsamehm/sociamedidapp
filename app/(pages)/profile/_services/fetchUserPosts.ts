import axios from "axios";

export const fetchProfileData = async () => {
  try {
    const { data } = await axios.get(`/api/profile`);
    return data;
  } catch (error) {
    console.error("Failed to fetch profile data:", error);
    throw error;
  }
};

export const fetchUserPosts = async () => {
  try {
    const { data } = await axios.get(`/api/posts/userPosts`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
