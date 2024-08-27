import React, {useState} from 'react';
function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""; //resets on the page after adding

        setFoods(prevFoods => [...prevFoods, newFood]); //same pattern as for the previous exercise
    }

    function handleRemoveFood(index){
        //the function parameter is already called "index", so within "filter()" use "i" instead
        setFoods(foods.filter((_, i) => i !== index)); //returns elements, which i's !== index
        //a better way is: setFoods(prevFoods => prevFoods.filter((_, i) => i !== index));
        //.filter(element, index) is provided by the current element and its index
        //using "_" passed as a parameter means that it's ignored (if we don't use during iterations)
    }

    return(
        <>
            <div>
                <h2>List of food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}> {/*Removes the element, when clicked on*/}
                        {food}
                    </li>)}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter food name" />
                <button onClick={handleAddFood}>Add food</button>
            </div>
        </>
    );
}
export default MyComponent;