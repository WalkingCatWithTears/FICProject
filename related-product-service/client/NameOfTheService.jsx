import "./index.css";
import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RelatedProducts from "./RelatedProducts.jsx";
import YourOutfitList from "./YourOutfitList.jsx";

const NameOfTheService = () => {
  const [data, setdata] = useState([]);
  const [relatedProducts, setrelatedProducts] = useState([]);
  const [outfits, setoutfits] = useState([]);
  const [productPics, setproductPics] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/11001/related")
      .then((result) => {
        setdata(result.data);
        

        return Promise.all(
          result.data.map((id) => {
            return axios.get(`/api/products/${id}`);
          })
        );
      })
      .then((result) => {
        setrelatedProducts(result);
        console.log(result, "this is the related data from the map  ");
        return Promise.all(
          data.map((e) => {
            return axios.get(`/api/products/${e}/styles`);
          })
        );
      })
      .then((result) => {
        setproductPics(result);
        console.log(result);
        console.log(productPics, "helllll");

        // setproductPics([...productPics,result.data.results[0]])
        // console.log(productPics,result.data.results[0].photos[0]['thumbnail_url'],"this is chkara7oms")
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addToOutfits = (element) => {
    if (!outfits.includes(element)) {
      setoutfits([...outfits, ...relatedProducts.filter((e) => e === element)]);
    }
    if (outfits.includes(element)) {
      console.log("you cant add to outfits twice  ");
    }
  };

  const checkdata = () => {
    if (data[0] !== undefined) {
      return (
        <>
          {" "}
          <RelatedProducts
            relatedData={relatedProducts}
            addoutfit={addToOutfits}
            pics={productPics}
          />
          <YourOutfitList relatedData={relatedProducts} outfitsData={outfits} />
        </>
      );
    } else {
      return <h1>chkara7oms</h1>;
    }
  };
  return <>{checkdata()}</>;
};

export default NameOfTheService;
