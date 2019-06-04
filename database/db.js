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
  connection.query(getRecordsString, (error7, result) => {
    if (error7) {
      callback(error7, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getRecords,
};
