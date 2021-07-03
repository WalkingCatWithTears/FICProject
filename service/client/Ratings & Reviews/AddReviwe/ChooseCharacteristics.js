import React from 'react'

const ChooseCharacteristics =() =>{ 
    const allCharacteristics = [['Size', ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide']], 
                                ['Width', ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']],
                                ['Comfort', ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']],
                                ['Quality', ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']],
                                ['Length', ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']],
                                ['Fit', ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']] ]
                                

    return (
        <div>
        { allCharacteristics.map((element) => {
            return ( <>
              <h6> {element[0]}</h6>
        <div className="flex gap-2 "> 
         <label for="choice-1">
			<input type="radio"name="choice" value={1} />
			<div> 1
				{/* <span>{element[0][0]}</span> */}
			</div>
            </label>
            <label for="choice-2">
			<input type="radio"name="choice" value={2} />
			<div>  2				
                {/* <span>{element[0][1]}</span> */}
			</div>
            </label>
            <label for="choice-3">
			<input type="radio"name="choice" value={3} />
			<div>
				3
				{/* <span>{element[0][2]}</span> */}
			</div>
            </label>
            <label for="choice-4">
			<input type="radio"name="choice" value={4} />
			<div>
				4
				{/* <span>{element[0][3]}</span> */}
			</div>
            </label>
            <label for="choice-5">
			<input type="radio"name="choice" value={5} />
			<div>
				5
				{/* <span>{element[0][4]}</span> */}
			</div>
            </label>
        </div> </>) })  }</div>
    )
}

export default  ChooseCharacteristics;