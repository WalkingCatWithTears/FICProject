import React from 'react'

const ChooseCharacteristics =() =>{
    return (
        <div className="flex gap-2 ">
         <label for="choice-1">
			<input type="radio"name="choice" value="" />
			<div> 1
				{/* <span>Because he was a Carpenter.</span> */}
			</div>
            </label>
            <label for="choice-2">
			<input type="radio"name="choice" value="" />
			<div>  2				
                {/* <span>Because he was a Carpenter.</span> */}
			</div>
            </label>
            <label for="choice-3">
			<input type="radio"name="choice" value="" />
			<div>
				3
				{/* <span>Because he was a Carpenter.</span> */}
			</div>
            </label>
            <label for="choice-4">
			<input type="radio"name="choice" value="" />
			<div>
				4
				{/* <span>Because he was a Carpenter.</span> */}
			</div>
            </label>
            <label for="choice-5">
			<input type="radio"name="choice" value="" />
			<div>
				5
				{/* <span>Because he was a Carpenter.</span> */}
			</div>
            </label>
        </div>
    )
}

export default  ChooseCharacteristics;