import { inject, injectable } from "tsyringe";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IListUserReposDTO } from "../../dtos/IListUserReposDTO";

@injectable()
class ListUserReposUseCase {

    constructor(
        @inject("GitHubRepository")
        private gitHubRepository: IGitHubRepository
    ) {};

    async execute(username:string): Promise<IListUserReposDTO> {
      try {

        if (!username) {
          throw new AppError("Username must be valid.");
        }

        return await this.gitHubRepository.listUserRepos(username)

      } catch (error) {
        throw new AppError("User not found.");
      }
    };
};

export { ListUserReposUseCase };