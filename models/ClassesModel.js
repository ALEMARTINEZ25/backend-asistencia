import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Classes = db.define('classes', {
    UUId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    className: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    // Puedes agregar más campos según las necesidades de tu aplicación
    //el codigo que va para bajo es el mismo en todo los modelos
}, {
    userId:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});


Users.hasMany(Classes);
Classes.belongsTo(Users, { foreignKey: 'userId' });

export default Classes;