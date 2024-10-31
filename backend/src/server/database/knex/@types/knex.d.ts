import { IUser, IBlog, IComent } from "../../models";

declare module "knex/types/tables" {
  interface Table {
    user: IUser;
    blog: IBlog;
    comment: IComent;
  }
}
