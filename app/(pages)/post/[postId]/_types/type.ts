interface User {
  _id: number;
  name: string;
  photo: string;
}
interface Comment {
  _id: string;
  content: string;
  commentCreator: User;
  post: string;
  createdAt: string;
}
export interface Posts {
  _id: string;
  body: string;
  user: User;

  comments: Comment[];
  createdAt: string;
}
