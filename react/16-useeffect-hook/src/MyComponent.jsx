//useEffect() is a React Hook which tells React DO SOME CODE WHEN (pick one):
//This component re-renders
//This component mounts (meaning creating and appending to the DOM)
//The state of value

//useEffect(function, [dependencies])
//1. useEffect(() => {})            runs after every re-render (not passing [])
//2. useEffect(() => {}, [])        runs only on mount (passing empty [])
//3. useEffect(() => {}, [value])   runs on mount + when value changes

//USES
//#1 Event Listeners
//#2 DOM manipulation
//#3 Subsciptions (real-time updates)
//#4 Fetching data from an API
//#5 Clean up when a component unmounts (when remove it from the DOM)
import React, {useState, useEffect} from 'react';

function MyComponent(){
    //Example 1
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("green");

    //every time the component re-renders, the title will be changed
    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    useEffect(() => { //the code is executed once (when component is appended to the DOM)
        document.title = "Update once!";
    }, []); //using empty []

    useEffect(() => { //code'll be performed, when the count OR colour updates
        document.title = `Count: ${count} ${colour}`;

        return () => { //when the component unmounts or before the next render (if no dependencies)
            //you can do some clean-up code
        }

    }, [count, colour]); //when the component is appended to the DOM and its count OR colour change

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }
    function subtractCount(){
        setCount(prevCount => prevCount - 1);
    }
    function changeColour(){
        setColour(prevColour => prevColour === "green" ? "red" : "green");
    }

    //Example 2
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    /*
    //Without useEffect():
    window.addEventListener("resize", handleResize);
    console.log("Event listener added"); //A bunch of (thousands) event listeners issue
    //So, let's add only 1 event listener only when the component mounts!*/
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added"); 
        //if the strict mode's on, the event listener will be added twice (dev-only set-up and a cleaning cycle)
        
        //before the next re-render (if no dependencies) or when the component unmounts
        return () => { //when we're done, use this for clean-up
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
            //Added for the dev-only set-up. Removed. And then added because the component ain't unmounted yet
        } //so, it doesn't lead to some unexpected behaviour
    
    }, []); //only when it mounts

    useEffect(() => { //when we resize the window, the title changes
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]); //if width OR height change

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            {/*Example 1*/}
            <p style={{color: colour}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColour}>Change colour</button><br /><br /><br />

            {/*Example 2*/}
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        
        </>
    );
}
export default MyComponent;