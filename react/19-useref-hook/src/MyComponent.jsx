//useState() re-renders the component when the state value changes
//useRef() doesn't cause re-renders when its value changes
//When you want a component to "remember" some info, but you don't
//want this information to trigger new renders
//useRef() returns an object with a single "current" property

//1. Accessing/Interacting with DOM elements
//2. Handling Focus, Animations and Transitions
//3. Managing Timers and Intervals

//the strict mode line is within main.jsx file (if we wanna remove it)
import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){
    //Let's use useState() to check when it re-renders:
    //let [number, setNumber] = useState(0);

    //Let's use useRef() now:
    const ref = useRef(0); //the "current" property = 0 (initialised)
    console.log(ref);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => { //shows when re-rendering
        console.log("Component rendered");
        console.log(inputRef1);
    });

    function handleClick1(){
        //For the useState():
        //setNumber(prevNumber => prevNumber + 1);
        
        //For useRef():
        //ref.current++;
        //console.log(ref.current); //the component's rendered only once/twice
    
        inputRef1.current.focus(); //the input element will be focused (won't cause re-renders)
        inputRef1.current.style.backgroundColor = "lightblue";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "lightblue";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "lightblue";
    }

    return(
        <>
            <button onClick={handleClick1}>
                Click me 1
            </button>
            <input ref={inputRef1} /><br />

            <button onClick={handleClick2}>
                Click me 2
            </button>
            <input ref={inputRef2} /><br />

            <button onClick={handleClick3}>
                Click me 3
            </button>
            <input ref={inputRef3} />
        </>  
    );
}
export default MyComponent;