export interface Posts {
  body: string;
  comments: string[];
  createdAt: string;
  id: string;
  image: string;
  user: {
    name: string;
    photo: string;
    _id: string;
  };
  post: string;
  _id: string;
}
export interface CommentCreator {
  _id: string;
  name: string;
  photo?: string;
}
export interface Comment {
  _id: string;
  content: string;
  commentCreator: CommentCreator;
  post: string;
  createdAt: string;
}
