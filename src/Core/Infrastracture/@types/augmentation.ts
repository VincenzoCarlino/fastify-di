import * as http from "http";
import {Db} from '../Persistence/applicationDbContext';
import {IUserRepository} from "../../Domain/Repositories/iUserRepository";
import {IUserService} from "../../Domain/Services/iUserService";

declare module "fastify" {export interface FastifyInstance<HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse> {
    db: Db,
    userRepository: IUserRepository
    userService: IUserService
}}
