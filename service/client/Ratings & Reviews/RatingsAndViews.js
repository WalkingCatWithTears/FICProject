import React, {useState, useCallback, useEffect} from 'react';
import StarRating from './Ratings Stars/EditRatingStars';
import ViewRatingStars from './Ratings Stars/ViewRatingStars.js';
import axios from 'axios';
import ProgressBra from './Ratings Stars/ProgressBare.js';
import Reviews from './Reviews/reviews.js';
import DropDown from './SortdropDown/DrropDown.js';
import Characteristics from './Characteristcs/Characteristics';
import AddReview from './AddReviwe/AddReview';



function RatingsAndViews() {
    const [pourcentage, setPourcentage] = useState(0)
    const [countForPourcentage, setCountForPourcentage] = useState(0)
    const [productId, setProductId] = useState(11001)
    const [productInfo, setProductIOnf] = useState('')
    const [bareValue, setBareValue] = useState({value:'', status: false});
    const [allBareValue, setAllBareValue] = useState({sort:'relevant', startSort: false});
    const [activeBareFilter, setActiveBareFilter] = useState(false)
    const [dropDownValue, setDropDownValue] = useState('relevance')
    const [addButton, setaddButton] = useState(true)
    const [countReview, setCountReview] = useState(2)


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
    // const renderComponent = (product, index) => {
    //   if(allBareValue === true) {
    //      if (product.rating === bareValue.value) {
    //        return <Reviews product = {product} />
    //      } 
    //   }else {
    //     return 
    //   }
    // }
   
    // const morePreciseRender = (element) => {
    //   if (allBareValue !== true || allBareValue !==false) {
    //       return <Reviews product = {element}/> 
    //   }
    // }
   
    // For the view more reviews button 
    const couterViews = () => {
      setCountReview(countReview + 2)
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
            if (productInfo.results.indexOf(product) >=countReview) {return }
              return <Reviews product = {product} />
            }
          } else if (!allBareValue.startSort) {
            if (productInfo.results.indexOf(product) >=countReview) {return }
            return <Reviews product = {product} />
          }
           
          }) 
        }
      <div className="flex pt-6 gap-3">
       {productInfo &&productInfo.results.length >2 && countReview < productInfo.results.length? <button onClick={()=>couterViews()} className="flex justify-center border-2 border-gray-500	w-40"> <span  className="flex pt-2 pb-2">MORE REVIEWS</span></button> : '' }
      <button className="flex  gap-4 justify-center border-2 border-gray-500	w-60" onClick={() => {setaddButton(true)}}> <div className="flex pt-2 pb-2"><span className="">ADD A  REVIEW </span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg></div></button> 
      </div>
      <AddReview addButton={addButton}  setaddButton={setaddButton} />
      </section>
      {/* <StarRating /> */}
   
    </div>
    </>
  );
    
}

export default RatingsAndViews;




