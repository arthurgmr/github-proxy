import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const sinceParam = request.query.since;
        const since = sinceParam ? parseInt(sinceParam as string, 10) : undefined;

        if (!Number.isInteger(since) && since !== undefined) {
            return response.status(400).json({ error: 'O parâmetro "since" deve ser um número inteiro válido.' });
        };

        const listUsersUseCase = container.resolve(ListUsersUseCase);

        const listUsers = await listUsersUseCase.execute(since);

        return response.status(201).send(listUsers);
    }
};

export { ListUsersController };
