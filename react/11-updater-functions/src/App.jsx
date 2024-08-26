//Updater function is a function passed as an argument usually to setState()
//e.g. setYear(year + 1), but better is setYear(arrow/updater function)
//Allow for safe updates based on the previous state. Used with multiple state
//updates and asynchronous functions. Good practice to use updater functions (even if you update once)
import MyComponent from './MyComponent.jsx';

function App() {
    return(
        <MyComponent />
    );
}
export default App;