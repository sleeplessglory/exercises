//props are read-only properties that're shared between components
//A parent component can send data to a child component
//<Component key=value />

//propTypes are mechanisms that ensure that the passed value is of
//the correct datatype
//age: PropTypes.number (we want to ensure the "age"'s type is number)

//defaultProps are default values for props in case they aren't passed
//from the parent component
//name: "Guest"
import Student from './Student.jsx'; //This is a child component for App.jsx
function App() { //The parent component
  return(
    <>
        {/*Let's send key=value pairs to the child component*/}
        <Student name="Florence" age={37} isStudent={false}/>
        {/*All non-string values are set within {} */}
        <Student name="Elizabeth" age={39} isStudent={false}/>
        <Student name="Adele" age={36} isStudent={false}/>
        <Student name="Stefani" age={38} isStudent={false}/> 
        <Student age={22} /> {/*defaultProps test*/}
    </>
  );
}

export default App;