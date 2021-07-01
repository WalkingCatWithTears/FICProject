import React, {useState, useCallback, useEffect} from 'react';
import StarRating from './Ratings Stars/EditRatingStars';
import ViewRatingStars from './Ratings Stars/ViewRatingStars.js';
import axios from 'axios';
import ProgressBra from './Ratings Stars/ProgressBare.js';
import Reviews from './Reviews/reviews.js';
import DropDown from './SortdropDown/DrropDown.js';

function RatingsAndViews() {
    const [pourcentage, setPourcentage] = useState(0)
    const [countForPourcentage, setCountForPourcentage] = useState(1)
    const [productId, setProductId] = useState(11001)
    const [productInfo, setProductIOnf] = useState('')
    const [bareValue, setBareValue] = useState(null);
    const [allBareValue, setAllBareValue] = useState(false);


    useEffect(() => {
        axios.get(`/reviews/${productId}`).then((result)=> {
          setProductIOnf(result.data)
        })
    }, [productId])
   
    const pourcentageCalculator = () => {
      if(productInfo  && !pourcentage) {
        let add=0;
        setCountForPourcentage(productInfo.results.length)
        productInfo.results.map((element) => {
          if(element.recommend) {
            add+=1
          }
        })
        setPourcentage(add)
      }
    }
    pourcentageCalculator()

    const renderComponent = (product) => {
      if(allBareValue === true) {
         if (product.rating === bareValue) {
           return <Reviews product = {product} />
         } 
      }else if (allBareValue === false) {
        return <Reviews product={product} />
      }
    }
   
  
    return (
    <> 
 
    <h1 className="flex px-16 font-mono ">RATINGS & REVIEWS</h1>
    <div className="flex px-16 py-3 justify-between ">
      <section className="pr-10"> 
        <ViewRatingStars productInfo = {productInfo.results}/>
        <p className="flex py-5 "> {(pourcentage*100)/countForPourcentage}% of the reviews recommend this product</p>
        <ProgressBra productInfo = {productInfo.results} bareValue= {bareValue} setBareValue= {setBareValue} allBareValue={allBareValue} setAllBareValue={setAllBareValue}/>
      </section>
      <section className="flex-grow">
      {/* <ProgressBarSorting  
      productInfo = {productInfo.results} 
      bareValue= {bareValue} 
      allBareValue= {allBareValue}
      /> */}
      {productInfo ? <h1 className="font-semibold text-gray-600 text-lg flex gap-1">{productInfo.results.length} Reviews, sorted by <DropDown /></h1> : ''}
      {productInfo.results && productInfo.results.map((product) => {
           return (
             <>
             {renderComponent(product)}
            </>
           )
      })}
      
      </section>
      {/* <StarRating /> */}
   
    </div>
    </>
  );
    
}

export default RatingsAndViews;