import { IListUserReposDTO } from "../dtos/IListUserReposDTO";
import { IListUsersResponseDTO } from "../dtos/IListUsersDTO";
import { User } from "../infra/entities/User";

interface IGitHubRepository {
    listUsers(since?: number): Promise<IListUsersResponseDTO>;
    userDetails(username: string): Promise<User>;
    listUserRepos(username: string): Promise<IListUserReposDTO>;
}

export { IGitHubRepository };