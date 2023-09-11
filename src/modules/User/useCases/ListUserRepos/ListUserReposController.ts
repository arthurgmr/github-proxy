import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserReposUseCase } from "./ListUserReposUseCase";

class ListUserReposController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;

        const listUserReposUseCase = container.resolve(ListUserReposUseCase);

        const listUserRepos = await listUserReposUseCase.execute(username);

        return response.status(201).send(listUserRepos);
    }
};

export { ListUserReposController };
