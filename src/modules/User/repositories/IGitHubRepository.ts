import { IListUsersResponseDTO } from "../dtos/IListUsersDTO";

interface IGitHubRepository {
    listUsers(since?: number): Promise<IListUsersResponseDTO>;
}

export { IGitHubRepository };