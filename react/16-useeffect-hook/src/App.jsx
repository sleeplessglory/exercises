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
import MyComponent from './MyComponent.jsx';
function App() {
    return(
        <>
            <MyComponent />
        </>
    );
}

export default App;