import { IListUsersResponseDTO } from "../../dtos/IListUsersDTO";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";
import { Octokit } from "@octokit/rest";

class GitHubRepository implements IGitHubRepository {
    private repository: any;

    constructor() {
        this.repository = new Octokit({
            auth: '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'
        });
    };

    async listUsers(since: number = 0): Promise<IListUsersResponseDTO> {
        const response = await this.repository.users.list({since});
        return {
            users: response.data,
            link: response.headers.link
        };
    };

};

export { GitHubRepository };