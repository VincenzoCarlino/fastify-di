import * as fp from "fastify-plugin";
import {healthcheck} from "./Controllers/healthcheck";
import {user} from "./Controllers/user";

export default fp(async (server, opts, next) => {
    server.register(healthcheck, {prefix: 'api/healthcheck'})
    server.register(user, {prefix: 'api/user'})
});