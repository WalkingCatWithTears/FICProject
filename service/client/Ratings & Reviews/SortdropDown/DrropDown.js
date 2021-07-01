import React, {useState} from 'react'

const DropDown = () => {
const [dropDown, setDropDown] = useState(false)

    return (
        
        <div className="flex">
        <h1 className="font-semibold text-gray-600 text-lg underline">relevance</h1>
        <div className="flex">
        <div  className="relative " onClick={() => setDropDown(!dropDown)}>
        <button onClick={()=> setDropDown(!dropDown)} className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
        <svg className="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        </button>
        {dropDown ?  
        <>
        <div  className="fixed inset-0  z-10 border-2"></div>
         <div x-show="dropdownOpen" onClick= {() => {setDropDown(false)}}className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md  z-20">
         <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
             helful
         </a>
         <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
             newest
        </a>
      
        </div>
        </>
  
  : ''}
 </div>
 </div>
 </div>
    )
}

export default DropDown;