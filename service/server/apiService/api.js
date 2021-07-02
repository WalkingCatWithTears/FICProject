const axios = require("axios");
const {token,apii} = require('./token');
const api = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc',
  headers: {
    Authorization: token,
  },
});

module.exports = api;
