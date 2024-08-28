import React, {useContext} from 'react'; //step 1 from App.jsx consumer components description
import {UserContext} from './CompA.jsx'; //step 1

function CompD(){
    const user = useContext(UserContext); //step 2
    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye, ${user}`}</h2>
        </div>
    );
}
export default CompD;