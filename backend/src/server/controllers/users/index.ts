import * as signUp from "./SignUp";
import * as signIn from "./SignIn";
import * as getById from "./GetById";

export const UsersController = {
      ...signUp,
      ...signIn,
      ...getById,

    };
    