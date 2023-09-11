import { User } from "../infra/entities/User";

interface IListUsersResponseDTO {
  users: User[];
  link: string;
}

export { IListUsersResponseDTO };