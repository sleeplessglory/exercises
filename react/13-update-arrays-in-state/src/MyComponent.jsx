import React, {useState} from 'react';
function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""; //resets on the page after adding

        setFoods(prevFoods => [...prevFoods, newFood]); //same reason as for the previous exercise
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
        //.filter(element, index) is provided by the element and its index
        //using "_" passed as a parameter means that it's ignored (we don't use during iterations)
        //the parameter is already called "index", so within "filter()" use "i" instead
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