import { IBlog } from "./Blogs";

export interface IUser {
  id: number; // Primary Key
  name: string;
  nickname: string;
  email: string;
  password: string;
  profile_url?: string;
  create_at: Date;
  blogs?: IBlog[]; // Relation indicating the blogs created by the user
}
