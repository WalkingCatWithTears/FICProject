import React, {useState, useCallback, useEffect} from 'react';
import StarRating from './Ratings Stars/EditRatingStars';
import ViewRatingStars from './Ratings Stars/ViewRatingStars.js';
import axios from 'axios';
import ProgressBra from './Ratings Stars/ProgressBare.js';
import ProgressBarSorting from './Soring/ProgressBareSorting.js';

function RatingsAndViews() {
    const [pourcentatgeOfRecommendedReviews, setPourcentage] = useState(50)
    const [productId, setProductId] = useState(11001)
    const [productInfo, setProductIOnf] = useState({})
    const [bareValue, setBareValue] = useState(null);

    useEffect(() => {
        axios.get(`/reviews/${productId}`).then((result)=> {
          setProductIOnf(result.data)
        })
    }, [productId])
   
  
    return (
    <> 
 
    <h1 className="flex px-16 font-mono ">RATINGS & REVIEWS</h1>
    <div className="flex px-16 py-3 justify-between ">
      <section className="pr-10"> 
        <ViewRatingStars productInfo = {productInfo.results}/>
        <p className="flex py-5 "> {pourcentatgeOfRecommendedReviews}% of the reviews recommend this product</p>
        <ProgressBra productInfo = {productInfo.results} bareValue= {bareValue} setBareValue= {setBareValue}/>
      </section>
      <section className="flex-grow">
      <ProgressBarSorting  productInfo = {productInfo.results} bareValue= {bareValue} />
      </section>
      {/* <StarRating /> */}
   
    </div>
    </>
  );
    
}

export default RatingsAndViews;