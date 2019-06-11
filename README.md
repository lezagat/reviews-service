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
5. [Requests](#Requests)
6. [Dependencies](#Dependencies)
7. [Authors](#Authors)
8. [License](#License)
9. [Acknowledgments](#Acknowledgments)

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

### GET
Returns json data on all reviews of a specific restaurant.

URL:
```'/restaurants/:id/reviews'```

Method: GET

URL Params Required: id=[integer]

Data Params: None

Success Response:

Code: 200 
Error Response:

Code: 404 NOT FOUND 
Content: { error : "User doesn't exist" }

Sample Call:

    $.ajax({
      method: 'GET',
      url: `/restaurants/${id}/reviews`,
      success: (result) => {
        console.log(result);
        const newRestaurant = result[0];
        const quotedReview = this.addBoldedQuotes(result[0].review);
        newRestaurant.review = quotedReview;
        this.setState({
          currentRestaurant: newRestaurant,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
---

### POST
Sends json data to server to get saved into the database

URL: ```'/restaurants/:id/reviews'```

Method: POST

URL Params Required: id=[integer]

Data Params:

{
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


Success Response:

Code: 201
Error Response:

Code: 500 NOT FOUND 
Content: { error : "This page isn't working" }


Sample Call:

  $.ajax({
    url: "/restaurants/:id/reviews",
    dataType: "json",
    type : "POST",
    success : function() {
      console.log("Successfully posted");
    }
    error: (error) =>{
      console.log(error)
    }
  });

---


#### PUT
Sends json data to the server to get specific data updated in the database

URL: ```'/restaurants/:id/reviews/review'```

Method: PUT

URL Params Required: id=[integer]

Data Params:

{
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

Success Response:

Code: 200 
Error Response:

Code: 404 NOT FOUND 

Sample Call:

  $.ajax({
    url: "/restaurants/:id/reviews",
    dataType: "json",
    type : "PUT",
    success : 
        $.ajax({
        url: "/restaurants/:id/reviews/review",
        dataType: "json",
        type : "GET",
        success : 
          this.setState({
            console.log(result);
            const newRestaurant = result[0];
            const quotedReview = this.addBoldedQuotes(result[0].review);
            newRestaurant.review = quotedReview;
            this.setState({
              currentRestaurant: newRestaurant,
            });
          },
          error: (error) => {
            console.log(error);
          },
        })
      }
  });

---

***DELETE***
Sends request to the server to get existing data in database to be erased

URL: ```'/restaurants/:id/reviews/review'```

Method: DELETE

URL Params Required:

id=[integer] (1-10,000,000)

Data Params: None

Success Response:

Code: 200 
Error Response:

Code: 500 NOT FOUND 


  $.ajax({
    url: "/restaurants/:id/reviews",
    dataType: "json",
    type : "DELETE",
    success : function() {
      console.log("Successfully deleted");
    }
  });


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
