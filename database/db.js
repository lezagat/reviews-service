const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'yourpassword',
  database: 'restaurants',
});

const getRecords = function (callback, restaurantNumber) {
  console.log(restaurantNumber);
  const getRecordsString = `SELECT * FROM restaurants WHERE rest_id = ${restaurantNumber}`;
  connection.query(getRecordsString, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

const postRecords = function (review,res,cb){
  connection.query(`INSERT INTO restaurants (review) VALUES ("${review}")`,cb);
}

const updateRecords = function (review,res,cb){
  connection.query(`UPDATE restaurants (review) VALUES ("${review}")`,cb);
}

module.exports = {
  getRecords, postRecords, updateRecords
};
