import React, { useState, useEffect } from 'react';
import ViewRatingStars from '../Ratings Stars/ViewRatingStars.js';
import StarRatings from  'react-star-ratings';
import moment from 'moment'

const ProgressBarSorting = (props) => {
    
    return (
        <>
        <div className="grid grid-cols-1 divide-y divide-yellow-500">
        {props.bareValue && props.productInfo && props.productInfo.filter((products) => {
            return products.rating === props.bareValue
        }).map((product) => {
            return (
                <>
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
                 <span> {product.reviewer_name}, {moment().format(product.date)}</span>
                </section>

                <section className="py-4">
                <div>
                <p>{product.summary}</p>
                <p>{product.body}</p>
                </div>
                </section>
                <div className=""></div>
                </>
                
            )
        })
        
        }
        </div>
        </>
    )

}

export default ProgressBarSorting;