import React from 'react'

export default function Comparison(props) {
    return (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center" onClick={()=>props.exit(false)}>
            <div className="bg-gray-200 max-w-md py-2 px-2   ">
                <div className="text-xs text-gray-500">COMPARING</div>
           <div className="flex justify-between "><h4 className="font-bold text-gray-700"> Product Short Name</h4>                <h4 className="font-bold text-gray-700"> Product Short Name</h4>  </div>

           <div className="flex justify-between "><p className="font-bold text-gray-700">✔</p>   <div>  text  </div>         <p className="font-bold text-gray-700">✔</p>  </div>
           <div className="flex justify-between "><p className="font-bold text-gray-700">✔</p>   <div>  text  </div>         <p className="font-bold text-gray-700">✔</p>  </div>
           <div className="flex justify-between "><p className="font-bold text-gray-700">✔</p>   <div>  text  </div>         <p className="font-bold text-gray-700">✔</p>  </div>
           <div className="flex justify-between "><p className="font-bold text-gray-700">✔</p>   <div>  text  </div>         <p className="font-bold text-gray-700">✔</p>  </div>
           <div className="flex justify-between "><p className="font-bold text-gray-700">✔</p>   <div>  text  </div>         <p className="font-bold text-gray-700">✔</p>  </div>
           <div className="flex justify-between "><p className="font-bold text-gray-700">✔</p>   <div>  text  </div>         <p className="font-bold text-gray-700">✔</p>  </div>

            </div>
        </div>
    )
}
