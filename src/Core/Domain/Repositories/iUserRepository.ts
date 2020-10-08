import User from "../Entities/user";

export interface IUserRepository {
    getAllUsers: () => Promise<User[]>
    getUserFromEmailAndPassword: (email: string, password: string) => Promise<User>
}