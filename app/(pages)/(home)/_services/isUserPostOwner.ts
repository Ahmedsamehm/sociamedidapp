export const isUserPostOwner = (userId: string, postOwnerId: string): boolean => {
  return userId == postOwnerId;
};
