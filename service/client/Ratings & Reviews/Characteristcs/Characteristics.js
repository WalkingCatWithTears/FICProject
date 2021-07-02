import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Characteristics = (props) => {
    const {productId} = props;
    const [value, onChange]=useState(1);
    const [reviewsMeta, setReviewsMeta] = useState(null)
    // to get the metadata for a given product.
    const getMetaData = () => {
        axios.get(`/reviews/meta/${productId}`).then((result) => {
            setReviewsMeta(Object.entries(result.data.characteristics));
        }).catch((err) => {console.log(err);})
    }

    useEffect(()=> {
        getMetaData()
    },[])

    return (
        <div className="pt-4">
        {reviewsMeta && [...Array(4)].map((range, index) => {
         return (
             <>
             <p className="text-sm ">{reviewsMeta[index][0]}</p>       
             <div className="pb-4" >
             <input className="w-full h-1 border-none outline-none bg-gray-400" type="range" min="1" max="5" value={4} />
             <div className="flex justify-between text-xs"> 
             <span>Poor</span>
             <span>Perfect</span>
             <span>Greet</span>
             </div>
             </div>
             </>
         )

         })}
            
        </div>
    )
}

export default Characteristics;