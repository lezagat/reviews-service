DROP KEYSPACE IF EXISTS restaurants;


create keyspace restaurants 
   with replication = {'class':'SimpleStrategy','replication_factor':1};





use restaurants;

create table restaurantreview (id int primary key,
name varchar, type varchar, price varchar, location varchar, description varchar, foodscore varchar, decorscore varchar, servicescore varchar, review text);


--serial is for postgres, while auto_increment is for mysql
-- INSERT INTO restaurants (name, type, price, location, description, foodScore, decorScore, serviceScore, review) VALUES ?
-- \timing
-- COPY restaurantreview (name, type, price, location, description, foodscore, decorscore, servicescore, review) FROM '/Users/ivanlee/hrsf117/LeZagat/zagat-reviews/data.csv' DELIMITER ',' CSV;