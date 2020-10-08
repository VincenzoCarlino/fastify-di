export default class User {
    private id: number
    private first_name: string
    private last_name: string
    private email: string
    private roles: string[]

    constructor(id: number, first_name: string, last_name: string, email: string, roles: string[]) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.roles = roles
    }
}