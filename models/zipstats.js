'use strict';
module.exports = function(sequelize, DataTypes) {
  	var ZipStats = sequelize.define('ZipStats', {
		zip: {
			type: DataTypes.CHAR(5),
			unique: true,
			allowNull: false,
			primaryKey: true
		},
		percent_below_pov: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true,
		},
		median_income: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		percent_unemployment: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		percent_family_homes: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		median_rent: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		median_home_value: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		percent_housing_growth: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		percent_change_property_value: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		percent_change_median_rent: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		percent_home_close_to_bus_route: {
		  type: DataTypes.DECIMAL(19,4),
		  allowNull: true
		},
		annual_number_crimes: { 
		  type: DataTypes.INTEGER(6),
		  allowNull: true
		},
		google_fiber: {
		  type: DataTypes.CHAR(1),
		  allowNull: true
		}
	},
	
	{
		timestamps: false,
		classMethods: {
			associate: function(models) {
			// associations can be defined here
			}
		}
	});
	return ZipStats;
};