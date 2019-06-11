const fs = require('fs');
const csvWriter = require ('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
const hardData = require('./database/hardData.js');
var counter = 0;

const getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const dataGen = (writer, data) =>{
  writer.pipe(fs.createWriteStream('data1.csv'));
  let i = 10000000
  write();
  function write(){
    let ok = true;
    do {
      i--;
      if(i===0){
        writer.write({
          id: i + 1 ,
          name : getRandomItem(hardData.names).toUpperCase() + (i + 1),
          type : getRandomItem(hardData.types),
          price : getRandomItem(hardData.prices),
          location : getRandomItem(hardData.locations),
          description : getRandomItem(hardData.descriptions),
          foodScore : randomScore(),
          decorScore : randomScore(),
          serviceScore : randomScore(),
          review : faker.lorem.paragraph(),
        });
      } else{
        ok=writer.write({
          id: i + 1,
          name : getRandomItem(hardData.names).toUpperCase() + (i + 1),
          type : getRandomItem(hardData.types),
          price : getRandomItem(hardData.prices),
          location : getRandomItem(hardData.locations),
          description : getRandomItem(hardData.descriptions),
          foodScore : randomScore(),
          decorScore : randomScore(),
          serviceScore : randomScore(),
          review : faker.lorem.paragraph(),
        });
      }
    } while (i > 0 && ok);
    if(i>0){
      writer.once('drain', write);
    }
  }
}

// const dataGen = () =>{
//   writer.pipe(fs.createWriteStream('data2.csv'));
//   for(var i = 0; i<5000000; i++){
//     writer.write({
    //  name : getRandomItem(hardData.names).toUpperCase(),
    //  type : getRandomItem(hardData.types),
    //  price : getRandomItem(hardData.prices),
    //  location : getRandomItem(hardData.locations),
    //  description : getRandomItem(hardData.descriptions),
    //  foodScore : randomScore(),
    //  decorScore : randomScore(),
    //  serviceScore : randomScore(),
    //  review : faker.lorem.paragraph(),
    // })
//   }
//   writer.end();
// }

dataGen(writer, hardData);


// const name = getRandomItem(hardData.names).toUpperCase();
// const type = getRandomItem(hardData.types);
// const price = getRandomItem(hardData.prices);
// const location = getRandomItem(hardData.locations);
// const description = getRandomItem(hardData.descriptions);
// const foodScore = randomScore();
// const decorScore = randomScore();
// const serviceScore = randomScore();
// const review = faker.lorem.paragraph();