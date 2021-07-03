import React, {useState, useCallback, useEffect} from 'react';
import StarRating from './Ratings Stars/EditRatingStars';
import ViewRatingStars from './Ratings Stars/ViewRatingStars.js';
import axios from 'axios';
import ProgressBra from './Ratings Stars/ProgressBare.js';
import Reviews from './Reviews/reviews.js';
import DropDown from './SortdropDown/DrropDown.js';
import Characteristics from './Characteristcs/Characteristics';

function RatingsAndViews() {
    const [pourcentage, setPourcentage] = useState(0)
    const [countForPourcentage, setCountForPourcentage] = useState(0)
    const [productId, setProductId] = useState(11001)
    const [productInfo, setProductIOnf] = useState('')
    const [bareValue, setBareValue] = useState({value:'', status: false});
    const [allBareValue, setAllBareValue] = useState({sort:'relevant', startSort: false});
    const [activeBareFilter, setActiveBareFilter] = useState(false)
    const [dropDownValue, setDropDownValue] = useState('relevance')

   // to get the reviews of a specefic product
    useEffect(() => {
        axios.get(`/reviews/${productId}/${allBareValue.sort}`).then((result)=> {
          setProductIOnf(result.data)
        })
    }, [allBareValue])

    console.log(productInfo);
   
    //to calculate the % of recommended 
    const pourcentageCalculator = () => {
      if(productInfo  && !countForPourcentage) {
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

    //To render component according to the existence of filter 
    const renderComponent = (product, index) => {
      if(allBareValue === true) {
         if (product.rating === bareValue.value) {
           return <Reviews product = {product} />
         } 
      }else {
        return 
      }
    }
   
    const morePreciseRender = (element) => {
      if (allBareValue !== true || allBareValue !==false) {
          return <Reviews product = {element}/> 
      }
    }
  
  
    return (
    <> 
 
    <h1 className="flex px-16 font-mono ">RATINGS & REVIEWS</h1>
    <div className="flex px-16 py-3 justify-between ">
      <section className="pr-10"> 
        <ViewRatingStars productInfo = {productInfo.results}/>
        <p className="flex py-5 "> {Math.floor((pourcentage*100)/countForPourcentage)}% of the reviews recommend this product</p>
        <ProgressBra 
        productInfo = {productInfo.results} 
        bareValue= {bareValue} 
        setBareValue= {setBareValue} 
        allBareValue={allBareValue} 
        setAllBareValue={setAllBareValue}
        activeBareFilter={activeBareFilter}
        setActiveBareFilter={setActiveBareFilter}
        />
        <Characteristics productId={productId} />
      </section>
      <section className="flex-grow">
      {productInfo ? <h1 className="font-semibold text-gray-600 text-lg flex gap-1">{productInfo.results.length} Reviews, sorted by <DropDown  value= {dropDownValue} handler = {setDropDownValue}  setAllBareValue={setAllBareValue} allBareValue={allBareValue}/></h1> : ''}

        {productInfo.results && productInfo.results.map((product) => {
          if(allBareValue.startSort) {
            if (product.rating === bareValue.value) {
              return <Reviews product = {product} />
            }
          } else if (!allBareValue.startSort) {
            return <Reviews product = {product} />
          }
           
          }) 
        }
      </section>
      {/* <StarRating /> */}
   
    </div>
    </>
  );
    
}

export default RatingsAndViews;




// {productInfo.results && allBareValue!==true && allBareValue!== false&&  productInfo.results.sort((a,b) => {
//   if (allBareValue === "newest") {
//     return new Date(b.date) - new Date(a.date)
//   } else if (allBareValue === "helful") {
//        if (a.helpfulness > b.helpfulness) return -1;
//   } else if (allBareValue === "relevance") {
//     if(new Date(b.date) - new Date(a.date)) return -1
//     if (a.helpfulness > b.helpfulness) return -1; 
//   }
// }).map((element) => {
//   return (
//     <>
//     {morePreciseRender(element)}
//     </>
//   )
// }) }
// {productInfo.results && allBareValue === true && productInfo.results.map((product) => {
//    return (
//      <>
//      {renderComponent(product)}
//     </>
//    )
//   }) 
// }