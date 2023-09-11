import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserDetailsUseCase } from "./UserDetailsUseCase";

class UserDetailsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;

        const userDetailsUseCase = container.resolve(UserDetailsUseCase);

        const userDetails = await userDetailsUseCase.execute(username);

        return response.status(201).send(userDetails);
    }
};

export { UserDetailsController };
