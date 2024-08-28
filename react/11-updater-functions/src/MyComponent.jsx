//Updater function is a function passed as an argument usually to setState()
//e.g. setYear(year + 1), but better is setYear(arrow/updater function)
//Allow for safe updates based on the previous state. Used with multiple state
//updates and asynchronous functions. Good practice to use updater functions (even if you update once)
import React, {useState} from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1); //e.g. count = 2 here
        setCount(count + 1); //still count = 2
        setCount(count + 1); //still count = 2
        //Updated now (count = 3). Similar to refreshing the web page 3 times
        //if we use setCount 3 times, it still will only incement by 1, since:
        //Uses the CURRENT state to calculate the NEXT state
        //These set functions do not trigger an update
        //React batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        //now the count will be updated 3 times. you can use a short version "c" instead of "prevCount"
        //Takes the PENDING state to calculate NEXT state
        //React puts your updater function in a queue (waiting in line)
        //During the next render, React will call them in the same order
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}
export default MyComponent;