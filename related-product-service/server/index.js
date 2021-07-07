const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const axios = require('axios')
require('dotenv').config()
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


const port = process.env.PORT || 3003;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





app.get('/api/products/:product_id/styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/styles`, {
    headers : {
      Authorization : process.env.GITHUB_TOKEN
    },

  }).then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log(err)
  });
});







app.get(`/api/products/:product_id`, (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}`, {
    headers: {
      Authorization: process.env.GITHUB_TOKEN
    },
  })
  .then((response) => {
    res.send(response.data)
    console.log(response.data,"this data we got it after sending req with ids of products")
  })
  .catch((error) => {
    console.error(error)
  })
})











// this is for getting the array of ids of related data
app.get(`/api/products/:product_id/related`, (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`, {
    headers: {
      Authorization: process.env.GITHUB_TOKEN
    },
  })
  .then((response) => {
    res.send(response.data)
    console.log(response.data,"array of related data ids")
  })
  .catch((error) => {
    console.error(error)
  })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
