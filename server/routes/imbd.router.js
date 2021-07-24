const axios = require("axios")
require("dotenv").config();

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game of thr'},
  headers: {
    'x-rapidapi-key': `${process.env.x-rapidapi-key}`,
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});