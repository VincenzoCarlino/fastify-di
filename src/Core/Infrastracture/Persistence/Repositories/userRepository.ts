import {IUserRepository} from "../../../Domain/Repositories/iUserRepository";
import {UserModel} from "../EntityConfigurations/userConfiguration";

class UserRepository implements IUserRepository {

    private _user: UserModel;

    constructor(user: UserModel) {
        this._user = user;
    }

    public getAllUsers() {
        return this._user.findAll()
            .then((users) => users)
            .catch(e => {
                throw e
            })
    }

    public getUserFromEmailAndPassword(email: string, password: string) {
        return this._user.findOne({
            where: {email, password}
        }).then((user) => user)
            .catch(e => {
                throw e
            })
    }

    public test(){
        return "ciao"
    }

}
export default UserRepository