const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create the Role model
class Role extends Model {}

//define table columns and configuration
Role.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		role_name: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "role",
	}
);

module.exports = Role;
