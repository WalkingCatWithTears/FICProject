import React, { useState, useEffect } from "react";
import axios from "axios";

import Comparison from "./Comparison.jsx";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function RelatedProducts(props) {
  const [isToggled, setisToggled] = useState(false);

  const clickandle = (boolean) => {
    setisToggled(boolean);
  };

  const toggleComparison = () => {
    if (isToggled) {
      return <Comparison exit={clickandle} />;
    } else {
      return;
    }
  };

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 overflow-hidden  ">
          {props.relatedData.map((e) => (
            <div className="inline-block px-3  " key={e.data.id}>
              <div className=" w-56 h-72 max-w-xs overflow-hidden  shadow-md bg-white  transition-shadow duration-300 ease-in-out border-2 hover:bg-white hover:shadow-lg hover:border-transparent">
                <div>
                  {" "}
                  <div className=" top-0 right-0">
                    <StarBorderIcon onClick={() => props.addoutfit(e)} />
                  </div>
                  <img
                    className="rounded"
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    alt="hello"
                    onClick={() => clickandle(true)}
                  />
                  <div className="mt-2 " onClick={() => clickandle(true)}>
                    <div>
                      <div className="text-xs text-gray-600 uppercase font-bold">
                        {e.data.category}{" "}
                      </div>
                      <div className="font-bold text-gray-700 leading-snug">
                        <a href="#" className="hover:underline">
                          {e.data.name}
                        </a>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        {e.data.default_price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toggleComparison()}
    </div>
  );
}
