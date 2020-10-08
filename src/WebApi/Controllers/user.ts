import {UserLoginBody} from "../Schemas/User";
import NotFoundError from "../../Core/Domain/Exceptions/notFoundError";

export const user = async (server, options) => {
    server.post(
        '/login',
        {
            schema: {
                body: UserLoginBody
            }
        },
        (request, reply) =>
            server.userService.login(request.body)
                .then((users) => {
                    return reply.code(200).send(users)
                })
                .catch((e: any) => {
                    if (e.type === 'NotFoundError') {
                        reply.code(404).send(e)
                    }
                    reply.code(500).send(e)
                })
    )
}