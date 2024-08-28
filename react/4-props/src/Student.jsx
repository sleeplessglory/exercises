//props are read-only properties that're shared between components
//A parent component can send data to a child component
//<Component key=value />

//propTypes are mechanisms that ensure that the passed value is of
//the correct datatype
//age: PropTypes.number (we want to ensure the "age"'s type is number)

//defaultProps are default values for props in case they aren't passed
//from the parent component
//name: "Guest"
function Student(props){ //"props" is an object storing all key=value pairs from the parent component
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            {/*Boolean values aren't displayed directly. Used with ternary operators*/}
        </div>
    );
}
//for propTypes use the lines below and import propTypes from "node_modules" folder
import PropTypes from 'prop-types';
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
//defaultProps are used when values aren't passed from the parent to the child component
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student;