DROP DATABASE IF EXISTS restaurants;

CREATE DATABASE restaurants;

USE restaurants;

CREATE TABLE restaurants ( 
rest_id INT AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
type VARCHAR(255) NOT NULL,
price VARCHAR(5) NOT NULL,
location VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
foodScore VARCHAR(5) NOT NULL,
decorScore VARCHAR(5) NOT NULL,
serviceScore VARCHAR(5) NOT NULL,
review VARCHAR(400) NOT NULL, 
PRIMARY KEY (rest_id))
);


INSERT INTO restaurants (name, type, price, location, description, foodScore, decorScore, serviceScore, review) VALUES ?