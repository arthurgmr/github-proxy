import { inject, injectable } from "tsyringe";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";
import { User } from "../../infra/entities/User";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UserDetailsUseCase {

    constructor(
        @inject("GitHubRepository")
        private gitHubRepository: IGitHubRepository
    ) {};

    async execute(username:string): Promise<User> {
      try {

        if (!username) {
          throw new AppError("Username must be valid.");
        }

        return await this.gitHubRepository.userDetails(username)

      } catch (error) {
        throw new AppError("User not found.");
      }
    };
};

export { UserDetailsUseCase };