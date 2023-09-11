import { IListUserReposDTO } from "../../dtos/IListUserReposDTO";
import { IListUsersResponseDTO } from "../../dtos/IListUsersDTO";
import { User } from "../../infra/entities/User";
import { IGitHubRepository } from "../IGitHubRepository";

class GitHubRepositoryInMemory implements IGitHubRepository {
    
    listUsers(since?: number): Promise<IListUsersResponseDTO> {
        throw new Error("Method not implemented.");
    }
    userDetails(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    listUserRepos(username: string): Promise<IListUserReposDTO> {
        throw new Error("Method not implemented.");
    }

};

export { GitHubRepositoryInMemory };