import { check } from "k6";
import http from "k6/http";

export  let options = {
  vus:500,        //virtual users
  rps:500,       //request per second
  duration:"3m"    //duration of the test
}

export default function() {
  var id = Math.ceil(Math.random() * 10000000);
    let res = http.get(`http://localhost:3010/restaurants/${id}/reviews`);
    check(res, {
        "is status 200": (r) => r.status === 200,
        "transaction time ok": (r) => r.timings.duration < 2000,
    });
};

//k6 run script.js


//500,3000,10m.... 2nd