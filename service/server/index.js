const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3001;
require('dotenv').config()



app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));



app.get(`/reviews/:product_id/`, (req, res) => {
  const {product_id} = req.params
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews`, {
    headers: {
      Authorization: process.env.GITHUB_TOKEN
    },
    params: {
      product_id : product_id
    }
  })
  .then((response) => {
    // console.log(response.data)
    res.send(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
})


app.put(`/reviews/:review_id/helpful`, (req, res) => {
 const {review_id} = req.params
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${review_id}/helpful`, {
    headers: {
      Authorization: process.env.GITHUB_TOKEN
    }
    
  })
  .then((response) => {
    console.log('hhhhhhhhhhhh')
    // res.send(response.data)
  })
  .catch((error) => {
    console.error(error)
  })

})



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
