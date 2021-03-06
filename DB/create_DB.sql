CREATE DATABASE IF NOT EXISTS zip_code_stats;
USE zip_code_stats;

DROP TABLE IF EXISTS zipstats;

CREATE TABLE zipstats (
	zip CHAR(5),
	primary key(zip),
	percent_below_pov DECIMAL(19,4),
	median_income DECIMAL(19,4),
	percent_unemployment DECIMAL(19,4),
	percent_family_homes DECIMAL(19,4),
	median_rent DECIMAL(19,4),
	median_home_value DECIMAL(19,4),
	percent_housing_growth DECIMAL(19,4),
	percent_change_property_value DECIMAL(19,4),
	percent_change_median_rent DECIMAL(19,4),
	percent_home_close_to_bus_route DECIMAL(19,4),
	annual_number_crimes INTEGER(6),
	google_fiber CHAR(1),
	walk_score INTEGER(3),
	hip_score INTEGER(3)
);