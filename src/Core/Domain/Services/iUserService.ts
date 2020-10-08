import User from "../../../Models/Users/userLoginOutput";
import {UserLoginInput} from "../../../WebApi/DTO/userLoginInput";

export interface IUserService {
    login: (user: UserLoginInput) => Promise<User>
}