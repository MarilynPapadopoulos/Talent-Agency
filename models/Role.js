const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create the Role model
class Role extends Model {}

//define tabel columns and configuration
Role.init(
    {
        name: {
            type: DataType.STRING(10)
        }
    }
)