import {Sequelize, Model, BuildOptions} from "sequelize";
import * as fp from "fastify-plugin";
import * as dotenv from 'dotenv'
import initUser, {UserModel} from "./EntityConfigurations/userConfiguration";
import User from "../../Domain/Entities/user";
import UserRepository from "./Repositories/userRepository";

dotenv.config()
const sequelize = new Sequelize({
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: "postgres",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000,
    },
})

export interface Db {
    user: UserModel
}

export default fp(async (fastify, opts: { uri: string }, next) => {
    sequelize
        .sync()
        .then(() => console.log("connected to db"))
        .catch((error) => {
            throw error;
        });

    fastify.decorate("db", {
        user: initUser(sequelize)
    })
    fastify.decorate("userRepository", new UserRepository(fastify.db.user))
});