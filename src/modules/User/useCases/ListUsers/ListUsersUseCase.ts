import { inject, injectable } from "tsyringe";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";
import { IListUsersResponseDTO } from "../../dtos/IListUsersDTO";

@injectable()
class ListUsersUseCase {

    constructor(
        @inject("GitHubRepository")
        private gitHubRepository: IGitHubRepository
    ) {};

    async execute(since?:number): Promise<IListUsersResponseDTO> {
      return await this.gitHubRepository.listUsers(since);
    }
};

export { ListUsersUseCase };