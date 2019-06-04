# Project Name

A recreation of the frontend for Zagat's reviews page (example: https://www.zagat.com/r/benu-san-francisco.)

This JavaScript app serves static HTML files through an Express server using a 
Webpack bundle that transpiles a React & jQuery frontend populated with MySQL data.

## Related Projects

Repo link for the photo module at the top of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-photos-service

Repo link for the map module at the side of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-restaurant-info

Repo link for the Google Reviews module at the bottom of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-google-reviews

Repo link for the Zagat reviews module in the middle of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-reviews

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#API)
5. [Dependencies](#Dependencies)
6. [Authors](#Authors)
7. [License](#License)
8. [Acknowledgments](#Acknowledgments)

## Usage

1.) To seed the database:

  [ npm run seed ]

2.) To start the server:

  [ npm run start ]

3.) To make webpack watch files:

  [ npm run react-dev ]

4.) To run Jest & Enzyme tests:

  [ npm run test ]

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
— Express
— Webpack
— React
— jQuery
— Jest
— Enzyme

## Development

## API

The on-splash /GET requests for the 100 random data records that dataGenerator.js stores in a MySQL database 'restaurants' are routed to: 

http://localhost:3001/api/restaurants/:id/reviews

This app's development port number was 3001.

Request objects get returned in the following form:

result[0] = {
    rest_id: 1,
    name: "CAFE BEAUJOLAIS",
    type: "Japanese",
    price: "$$$$",
    location: "Tenderloin",
    description: "Museum's bistro for star chef's recipes",
    foodScore: "2.7",
    decorScore: "2.4",
    serviceScore: "0.2",
    review: "Iure modi eos et expedita. Itaque est cupiditate similique laborum dolorem voluptatum quos. Placeat autem ut exercitationem et. Porro culpa rerum et debitis in voluptates sit sit perferendis. Velit deleniti nostrum ut sunt maxime animi quia sit. Beatae itaque tempora sed quo et ut."
},


## Requests

GET
Listening for a get request with the same API ('/restaurants/:id/reviews'). Once receieved, will run the query to get the requested back to the server, then back to the client.

POST
Listening for a post request with the same API ('/restaurants/:id/reviews'). Once received, will run the query to save the data/paramators into the database and sends back a response (pass/fail). The parameters will be rest id, name, type, price, location, description, food score, decor score, service score, and the review.  Then upon success, a GET request will be sent to get the data for the paraments above.

Update
Listening for a put request with the same API ('/restaurants/:id/reviews'). Once receieved, will run the query to update the data/paramators that is already in the database and sends back a response (pass/fail). The parameters will be id, name, type, price, location, description, food score, decore score, service score, and the review. (The reason we need all of them is because any of those can be upated). 

Delete
Listening for a delete request with the same API ('/restaurants/:id/reviews'). Once received, will run the query to remove the data that is already in the database and then sends bak a response (pass.fail). The parameters will be id, name, type, price, location, description, food score, decore score, service score, and the review. (The reason is because we need all the information related to the review to be removed)

## Dependencies

From within the root directory:

```sh

General Set-up:

npm init
npm install webpack
npm install babel
npm install jquery
npm install react
npm install react-dom
npm install react-scripts

Tests:

npm install jest
npm install enzyme
npm install enzyme-adapter-react-16

Database and Data:

npm install faker
npm install mysql

Linting:

npm install husky
npm install eslint
npm install lint-staged
```

## Authors

Martin Connor (mepc36@gmail.com)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

Sang Park, Nick Vincent-Hill, Destiny Walker, Connor Homan, Roger Dunn, Eugenia Ong, Rafe Autie, Eric Soderholm
