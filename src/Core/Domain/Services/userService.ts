import {IUserService} from "./iUserService";
import User from "../Entities/user";
import UserLoginOutput from "../../../Models/Users/userLoginOutput";
import SHA256 = require("crypto-js/sha256");
import NotFoundError from "..//Exceptions/notFoundError";
import {IUserRepository} from "../Repositories/iUserRepository";
import {UserLoginInput} from "../../../WebApi/DTO/userLoginInput";

class UserService implements IUserService {

    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    public login(input: UserLoginInput) {
        return this._userRepository.getUserFromEmailAndPassword(
            input.email,
            SHA256(input.password).toString()
        )
            .then((user: User) => {
                if (user === null) {
                    throw new NotFoundError("No user under this email and password")
                }
                return new UserLoginOutput(
                    user._id,
                    user._first_name,
                    user._last_name,
                    user._email,
                    user._roles,
                    'jwt'
                )
            })
            .catch(e => {
                throw e
            })
    }
}

export default UserService