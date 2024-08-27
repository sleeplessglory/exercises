import React, {useState, useEffect} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("green");

    //every time the component re-renders, the title will be changed
    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    useEffect(() => { //the code is executed once (component was appended to the DOM)
        document.title = "Update once!";
    }, []); //using empty []

    useEffect(() => { //code'll be performed, when the count updates
        document.title = `Count: ${count} ${colour}`;
    }, [count, colour]); //when the component is appended to the DOM and its count and colour change

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }
    function subtractCount(){
        setCount(prevCount => prevCount - 1);
    }
    function changeColour(){
        setColour(prevColour => prevColour === "green" ? "red" : "green");
    }
    return(
        <>
            <p style={{color: colour}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColour}>Change colour</button><br />

        
        </>
    );
}
export default MyComponent;