const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create the Role model
class Role extends Model {}

//define tabel columns and configuration
Role.init(
	{
		role_name: {
			type: DataType.STRING(10),
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "role",
	}
);
