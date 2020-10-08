import User from "./user";

export default class UserLoginOutput extends User {
    private jwt: string

    constructor(id: number, first_name: string, last_name: string, email: string, roles: string[], jwt: string) {
        super(id, first_name, last_name, email, roles);
        this.jwt = jwt;
    }
}