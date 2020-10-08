import User from '../../../Domain/Entities/user'
import {BuildOptions, DataTypes, Model} from "sequelize";

export type UserModel = typeof Model & { new (values?: object, options?: BuildOptions): User }

const initUser = (sequelize) => {
    return User.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            is_enabled: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            roles: {
                type: DataTypes.JSONB,
                allowNull: false,
                defaultValue: []
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                onUpdate: sequelize.literal('CURRENT_TIMESTAMP')
            },
            last_connection: {
                type: DataTypes.DATE,
                allowNull: true
            },

        }, {
            sequelize,
            modelName: 'users',
            timestamps: false
        }
    )
}

export default initUser