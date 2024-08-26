//Conditional rendering allows you to control what gets rendered
//in the application based on certain conditions
//(show, hide or change components)
import UserGreeting from './UserGreeting.jsx';
function App() {
    return(
        <>
            <UserGreeting isLoggedIn={true} username="sleeplessglory"/>
        </>
    );
}

export default App;