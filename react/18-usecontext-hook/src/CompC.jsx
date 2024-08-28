import React, {useContext} from 'react'; //step 1 from App.jsx consumer components description
import {UserContext} from './CompA.jsx'; //step 1
import CompD from './CompD.jsx';

function CompC(){
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again, ${user}`}</h2>
            <CompD />
        </div>
    );
}
export default CompC;