export interface IBlog {
  id: number; // Primary Key
  title: string;
  description: string;
  author: number; // Foreign Key, references User id
  like_amout: number;
  image: string;
}
