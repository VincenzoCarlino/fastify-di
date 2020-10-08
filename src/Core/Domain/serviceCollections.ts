import * as fp from "fastify-plugin";
import UserService from "./Services/userService";

export default fp(async (fastify, opts: { uri: string }, next) => {
    fastify.decorate("userService", new UserService(fastify.userRepository))
});