import React, {useState} from 'react';
function Exercise(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleCarYear(event){
        setCarYear(event.target.value);
    }
    function handleCarMake(event){
        setCarMake(event.target.value);
    }
    function handleCarModel(event){
        setCarModel(event.target.value);
    }
    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(prevCars => [...prevCars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    return(
        <div>
            <ol>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ol>

            <input type="number" value={carYear} onChange={handleCarYear} /><br />
            <input type="string" value={carMake} onChange={handleCarMake}
                   placeholder="Enter car make" /><br />
            <input type="string" value={carModel} onChange={handleCarModel}
                   placeholder="Enter car model" /><br />
            <button onClick={handleAddCar}>Add car</button>
        </div>
    );
}
export default Exercise;