import {Sequelize, Model, DataTypes, Optional, BuildOptions} from 'sequelize';
import moment = require("moment");

const formatTimestamp = 'DD/MM/YYYY HH:MM:SS'

export default class User extends Model{
    private id: number
    private first_name: string
    private last_name: string
    private email: string
    private password: string
    private is_enabled: boolean
    private roles: string[]
    private created_at: string
    private updated_at: string
    private last_connection: string

    public get _id(): number {
        return this.id
    }

    public get _first_name(): string {
        return this.first_name
    }

    public get _last_name(): string {
        return this.last_name
    }

    public get _email(): string {
        return this.email
    }

    public get _password(): string {
        return this.password
    }

    public get _is_enabled(): boolean {
        return this.is_enabled
    }

    public get _roles(): string[] {
        return this.roles
    }

    public get _created_ad(): string {
        return moment(this.created_at).format(formatTimestamp)
    }

    public get _updated_at(): string {
        return moment(this.updated_at).format(formatTimestamp)
    }

    public get _last_connection(): string {
        return this.last_connection && moment(this.last_connection).format(formatTimestamp) || ''
    }
}