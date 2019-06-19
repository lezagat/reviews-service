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


scp -i forDB.pem /Users/ivanlee/hrsf117/LeZagat/zagat-reviews/data.csv.gz ec2-user@ec2-54-183-208-118.us-west-1.compute.amazonaws.com:/home/ec2-user


\copy restaurantreview (name,type,price,location,description,foodscore,descorscore,servicescore,review) from "/home/ec2-user/data.csv" delimiter ",", csv;

[ec2-user@ip-172-31-31-140 ~]$ sudo su - postgres
-bash-4.2$ psql -U postgres
