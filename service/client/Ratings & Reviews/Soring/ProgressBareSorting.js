import React, { useState, useEffect } from 'react';
import ViewRatingStars from '../Ratings Stars/ViewRatingStars.js';
import StarRatings from  'react-star-ratings';
import moment from 'moment'
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


const ProgressBarSorting = (props) => {
    const [show, setShow] = useState(false)
    const [helpRate, setHelpRate] = useState('')
    
    return (
        <>
        <div className="">
        {props.bareValue && props.productInfo &&  props.productInfo.filter((products) => {
            return products.rating === props.bareValue
        }).map((product) => {
            return (
                <>
                <div className=" pt-6 border-b-2 ">
                <section className="flex justify-between">
                { <StarRatings
                 className="flex test-xs"
                 isHalf={true}
                 rating= {props.bareValue}
                 edit={false}
                 starRatedColor="#ffc107"
                 starDimension="20px"
                 starSpacing="2px"
                 />   }
                 <span className="text-right text-gray-500	text-sm"> {product.reviewer_name}, {moment(product.date).format("MMM Do, YYYY")}</span>
                </section>

                <section className="py-4 ">
                <div>
                <p className="font-semibold text-gray-600 pb-4 text-lg">{product.summary}</p>
                <p>{product.body}</p>
                {product.recommend?   <div className="flex gap-2 pt-6"> <div className="py-1"><FaCheck /></div><p >I recommend this project</p> </div>: ""}
                { true ? <div className="pt-6">
                <div className="bg-gray-200 ">
                <p className="font-semibold py-2 px-3 text-base text-gray-600">Response from seller:</p>
                <p className="pb-4 px-3 text-base"> reponse du ta7foun </p>
                </div>
                </div> : ""}
                <div className="flex text-xs pt-4 gap-1 text-gray-500">
                 <span onClick={()=>setShow(true)}>Helpful?</span>
                 <span className="underline">Yes{'('+ product.helpfulness + ')'} </span>
                 <span className="">|</span>  <span className="underline">Report</span>
                </div>
                {show ? 
                <div className="flex flex-grow-0 text-xs gap-1 pt-2"> 
                <ImCross onClick={() => setShow(false)} />
                <div className="">
                <label>Yes</label>
                <input type="radio" className="form-radio h-2 w-2 text-orange-400" name="rate" value="1" onClick={() => setHelpRate(true)} />
                </div>
                <div className="">
                <label>No</label>
                <input type="radio"  className="form-radio h-2 w-2 text-orange-400"  name="rate" value="0" onClick={() => setHelpRate(false)} />
                </div>
                </div>: ""}
                </div>
                </section>
                
                </div>
                </>
                
            )
        })
        
        }
        </div>
        </>
    )

}

export default ProgressBarSorting;