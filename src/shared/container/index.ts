import { container } from "tsyringe";
import { IGitHubRepository } from "../../modules/User/repositories/IGitHubRepository";
import { GitHubRepository } from "../../modules/User/infra/repositories/GitHubRepository";

container.registerSingleton<IGitHubRepository>(
    "GitHubRepository",
    GitHubRepository
);