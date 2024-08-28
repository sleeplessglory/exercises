//React hook is a special function that allows functional components to use React features
//without writing class components (React v16.8) (useState, useEffect, useContext,
//useReducer, useCallback, etc.)

//useSate() is a React hook that allows the creation of a stateful variable AND a setter
//function to update its value in the Virtual DOM
//[name, setName]
//Do not use it with class-based components!
import React, {useState} from 'react'; //We only need useState function out of the whole "React" library (object destructuring {})
function MyComponent(){
    const [name, setName] = useState("Guest"); //We can set an initial state with useState("Guest")
    const updateName = () => {
        setName("Florence Welch"); //When a stateful variable ("name") updates with a setter function ("setName"), it triggers and rerenders a Virtual DOM
    };

    const [age, setAge] = useState(0); //We use array destructuring to create a stateful variable and a setter function to update it
    const incrementAge = () => {
        setAge(age + 2);
    };

    const [isEmployed, setIsEmployed] = useState(false);
    const toggleStatus = () => {
        setIsEmployed(!isEmployed); //toggling the status
    };
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>Toggle status</button>
        </div>
    );
}
export default MyComponent;