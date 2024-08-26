import PropTypes from 'prop-types';
function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2 className="welcome-message">Welcome, {props.username}!</h2>
    }
    else {
        return <h2 className="login-prompt">Please, log in to continue!</h2>
    } 
    
    //Or we can use the ternary operator
    return(props.isLoggedIn ? <h2>Welcome, {props.username}!</h2> : 
                              <h2>Please, log in to continue!</h2>);
    //True and false values can be assigned to variables to read easier
}
//It's good to remember using propTypes and defaultProps to prevent bugs
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false
}
export default UserGreeting;