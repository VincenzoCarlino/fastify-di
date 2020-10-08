import * as fastify from "fastify";
import * as fastifyBlipp from "fastify-blipp";
import {Server, IncomingMessage, ServerResponse} from "http";
import cors = require("cors");
import controllers from './src/WebApi/index'
import persistence from './src/Core/Infrastracture/Persistence/applicationDbContext'
import services from './src/Core/Domain/serviceCollections'

const server: fastify.FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse> = fastify();

server.use(cors())
server.register(fastifyBlipp);
server.register(persistence) // registering persistence
server.register(services) // registering services
server.register(controllers);

const start = async () => {
    try {
        await server.listen(3000, 'localhost');
        server.blipp();
    } catch (err) {
        console.log(err);
        server.log.error(err);
        process.exit(1);
    }
};

process.on("uncaughtException", error => {
    console.error(error);
});
process.on("unhandledRejection", error => {
    console.error(error);
});

start();