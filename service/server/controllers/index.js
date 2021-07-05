const axios = require("../apiService/api");

const get = async (req, res) => {
  try {
    console.log("hi")
    const response = await axios.get("/products");
    res.send(response.data);
  } catch (error) {
    console.log(error.response);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get("/products/" + id);
    res.send(response.data);
  } catch (error) {
    console.log(error);
   
  }
};

const getAllStyle = async (req, res) => {
const id = req.params.id;

  try {
    const response = await axios.get("/products/" + id + "/styles");
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
};

const getRelatedStyle = async (req, res) => {
const id = req.params.id;
  try {
    const response = await axios.get("/products/" + id + "/related");
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { get,getById,getAllStyle,getRelatedStyle };
