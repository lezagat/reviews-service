require('newrelic');
const express = require('express');
const CORS = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

app.use(bodyParser.json());

app.use(CORS());
app.use(express.static(`${__dirname}/../client/dist`));


const {Pool} = require('pg');

const pool = new Pool({
  host:"18.144.57.145",
  database: 'restaurants',
  user:  'postgres',
  pw: 'ivanlee',
  port: 5432
})

// pool.connect((err,client,release)=> {
//   if(err){
//     // res.status(500).send(err);
//     return;
//   }
// })

app.get('/restaurants/:id/reviews', (req, res) => {
  var newId= req.params.id;
  pool.query(`SELECT * FROM restaurantreview WHERE id = ${newId}`)
    .then((data) => {
      res.status(200).send(data.rows);
    }) .catch((err) => {
      res.status(500).send(err);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));





//npm install pg
//pool function for server ///line 15

//start server