import { IListUsersResponseDTO } from "../../dtos/IListUsersDTO";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";
import { Octokit } from "@octokit/rest";
import { User } from "../entities/User";
import { IListUserReposDTO } from "../../dtos/IListUserReposDTO";

class GitHubRepository implements IGitHubRepository {
    private repository: any;

    constructor() {
        this.repository = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });
    }

    async listUsers(since: number = 0): Promise<IListUsersResponseDTO> {
        const response = await this.repository.users.list({ since });
        return {
            users: response.data,
            link: response.headers.link
        };
    };

    async userDetails(username: string): Promise<User> {
        const response = await this.repository.users.getByUsername({ username });
        return response.data;
    };

    async listUserRepos(username: string): Promise<IListUserReposDTO> {
        const response = await this.repository.repos.listForUser({ username });
        return response.data;
    };

};

export { GitHubRepository };