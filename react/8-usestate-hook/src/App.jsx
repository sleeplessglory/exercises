//React hook is a special function that allows functional components to use React features
//without writing class components (React v16.8) (useState, useEffect, useContext,
//useReducer, useCallback, etc.)

//useSate() is a React hook that allows the creation of a stateful variable AND a setter
//function to update its value in the Virtual DOM
//[name, setName]
//Do not use it with class-based components!
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
function App() {

    return(
        <>
            <MyComponent />
            <Counter />
        </>
    );
}

export default App;