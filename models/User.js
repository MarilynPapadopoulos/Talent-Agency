const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create the User model
class User extends Model {}

// define table columns and configuration
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(30),
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		role_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "role",
				key: "id",
			},
		},
		profile_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "profile",
				key: "id",
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);
