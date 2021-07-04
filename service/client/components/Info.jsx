import ReactStars from "react-stars";



function Info({name,products,styles,handleChange,quantity}) {
 


console.log(quantity) 

  return (
    <div className="bg-gray-200 flex justify-center w-2/5">
    <div className="px-8 py-12">
      <div className="flex gap-x-3">
      <a className="text-1xl text-gray-400 mt-1.5">Read all reviews</a>
      <ReactStars count={5} value="2.75" size={24} color2={"#ffd700"} />
      </div>
      <h2 className="mt-2 text-1xl font-bold text-gray-500 leading-tight">
        {products.category}
      </h2>
      <h1 className="mt-2 text-4xl font-bold text-gray-600">{products.name}</h1>
      <h4 className="mt-2 text-1xl text-gray-600">{products.default_price}$</h4>
      <h4 className="mt-2 text-1xl text-gray-600">STYLE > <span>{name}</span></h4>
      <div className=" mt-4 grid gap-x-3 gap-y-2 grid-cols-4">
        {styles && styles.map((element, index) => {
          return (
            <img
              className="w-20 h-20 rounded-full cursor-pointer"
              src={element.photos[0].thumbnail_url}
              alt="img"
              key={index}
              onClick={()=>handleChange(index)} 
            />
          );
        })}
      </div>
      <div className="mt-4 grid gap-x-3 gap-y-2 grid-cols-2">
   
              <div>
             <select className="w-50">
               <option value="select size">SELECT SIZE</option>
         {
           Object.values(quantity).map((element,index)=>{
            return(
               <option value={element.size}>{element.size}</option>
               )
               
              })
            }
            </select>
            <select className="w-20">
              {
                Object.values(quantity).map((element,index)=>{
                  return  <option value="1">{element.quantity}</option>
                })
              }
              
            </select>
            </div>
          
            
      </div>
      <div className="mt-4 grid gap-x-3 gap-y-2 grid-cols-2">
        <button className="border-2 border-black text-left w-56 p-2">
          ADD TO BAG <span className="w-6">+</span>
        </button>
        <button className="border-2 border-black w-12 p-1 text-center">
         <i className="fas fa-star"></i>
          </button>
      </div>
    </div>
  </div>
  );
}

export default Info;
