DROP DATABASE IF EXISTS restaurants;

CREATE DATABASE restaurants;
--createdb

\c restaurants;
--psql database

CREATE TABLE restaurantreview ( 
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
type VARCHAR(50) NOT NULL,
price VARCHAR(5) NOT NULL,
location VARCHAR(100) NOT NULL,
description VARCHAR(100) NOT NULL,
foodscore VARCHAR(10) NOT NULL,
decorscore VARCHAR(10) NOT NULL,
servicescore VARCHAR(50) NOT NULL,
review TEXT NOT NULL
);

--serial is for postgres, while auto_increment is for mysql
-- INSERT INTO restaurants (name, type, price, location, description, foodScore, decorScore, serviceScore, review) VALUES ?
\timing
-- COPY restaurantreview (name, type, price, location, description, foodscore, decorscore, servicescore, review) FROM '/Users/ivanlee/hrsf117/LeZagat/zagat-reviews/data.csv' DELIMITER ',' CSV;