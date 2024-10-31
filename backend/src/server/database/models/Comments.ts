export interface IComent {
  id: number; // Primary Key
  content: string;
  author: number; // Foreign Key, references User id
  post: number; // Foreign Key, references Blogs id
  create_at: Date;
}
