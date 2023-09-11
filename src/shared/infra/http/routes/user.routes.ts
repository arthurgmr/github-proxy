import { Router } from "express";
import { ListUsersController } from "../../../../modules/User/useCases/ListUsers/ListUsersController";
import { UserDetailsController } from "../../../../modules/User/useCases/UserDetails/UserDetailsController";
import { ListUserReposController } from "../../../../modules/User/useCases/ListUserRepos/ListUserReposController";


const userRoutes = Router();

const listUsersController = new ListUsersController();
const userDetailsController = new UserDetailsController();
const listUserReposController = new ListUserReposController();

userRoutes.get("/", listUsersController.handle);
userRoutes.get("/:username/details", userDetailsController.handle);
userRoutes.get("/:username/repos", listUserReposController.handle);

export { userRoutes };