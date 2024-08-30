import React, {useState} from 'react';
function MyComponent(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());    
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};

        setCars(prevCars => [...prevCars, newCar]);
        
        setCarYear(new Date().getFullYear());
        setCarMake(""); //in the previous exercise we couldn't do it, since it was an array
        setCarModel(""); //resets the specific property, not the whole array
    }
    function handleRemoveCar(index){ //car object is being removed when we click on it
        setCars(prevCars => prevCars.filter((_, i) => i!==index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="string" value={carMake} onChange={handleMakeChange}
                   placeholder="Enter car make" /><br />
            <input type="string" value={carModel} onChange={handleModelChange}
                   placeholder="Enter car model" /><br />
            <button onClick={handleAddCar}>Add car</button>
        </div>
    );
}   
export default MyComponent;