import React, {useState} from 'react';
function MyComponent() {
    
    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event){
        //setCar({...car, year: 2025}); //{year: 2024, make: "Ford", model: "Mustang", year: 2025}
        //if an object has 2 properties with the same name, then the latter will be used
        //spread all the properties of a car (...car) and add a "year"
        //otherwise the other properties disappear on the page and only a new "year" remains

        setCar(prevCar => ({...prevCar, year: event.target.value}));
        //use ({}) since with "{}" after "=>" an arrow function waits for more than 1 line of a code
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));

    }
    function handleModelChange(event){
        setCar(prevCar => ({...prevCar, model: event.target.value}));
    }
    return(
        <>
            <div>
                <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange} /><br />
                <input type="text" value={car.make} onChange={handleMakeChange} /><br />
                <input type="text" value={car.model} onChange={handleModelChange} /><br />
            </div>
        </>
    );
}
export default MyComponent;