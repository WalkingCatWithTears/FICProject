import React, { useEffect, useState, useCallback } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';
import { BsArrowReturnRight } from 'react-icons/bs';


const ProgressBra = (props) => {
    const {value, status} = props.bareValue
    const [ratingBar, setRatingbar] = useState(null);
    const [counter, setcounter] = useState(0)

    //To calculate the % of each bare
    const starPourcentage = () => {
        if (props.productInfo && !ratingBar) {
        let starPourcentage = {};
        props.productInfo.forEach( (rating) => { starPourcentage[rating.rating] = (starPourcentage[rating.rating] || 0) + 1;});
        setRatingbar(starPourcentage)
        setcounter(props.productInfo.length)
        }
    }
    starPourcentage()
    
    return (
        <>
        {[...Array(5)].map((Bar, index) => {
        const barValue = 5 - index;
        return (
           <>
           <label >
           <input  
            type="radio" 
            name="star_rating" 
            className="flex hidden" 
            value = {barValue}
            onClick = {() => { 
            if(ratingBar[barValue]) {
              if (barValue === value) {props.setBareValue({value:barValue, status: !status})};
              if (barValue !== value) {props.setBareValue({value:barValue, status: true})};
              props.setAllBareValue(true); 
              props.setActiveBareFilter(true)
              if(barValue === value ) {props.setAllBareValue(!props.allBareValue); props.setActiveBareFilter(!props.allBareValue)}; 
            }  }  }
           />
           <div  className= "flex justify-between gap-3 hover:text-red-500 "> 
           {ratingBar && <p className="text-sm underline ">{barValue} Stars</p> }
           { ratingBar && <ProgressBar
            className="py-2 "
            completed={ratingBar && ratingBar[barValue] ? ((ratingBar[barValue]*100)/counter) : 0} 
            bgColor = "#32CD32" 
            height = {10}
            labelSize = {10}
            width = {250}
            borderRadius = "0"
         /> }
           </div>
          </label>
         </>
        )
        })}
        {props.activeBareFilter? <div className="flex pt-1 cursor-pointer" onClick={()=> {props.setAllBareValue(false), props.setActiveBareFilter(false)}}>  <BsArrowReturnRight className=""/><span className="underline text-gray-500 text-xs ">Remove filters</span> </div>:''}
        </>
    )

}

export default ProgressBra;




        