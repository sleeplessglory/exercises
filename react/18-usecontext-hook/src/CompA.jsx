import React, {useState, createContext} from 'react'; //createContext is for the 1st step in App.jsx
import CompB from './CompB.jsx';

export const UserContext = createContext(); //step 2 from App.jsx provider component description

function CompA(){
    const [user, setUser] = useState("sleeplessglory");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello, ${user}`}</h2>
            <UserContext.Provider value={user}>
                <CompB /> 
            </UserContext.Provider>
            
            {/* <CompB user={user}/> then in CompB file: <CompC user={props.user}/>, etc.
            Props drilling. When we drill it down right to the CompD (one by one)*/}
        </div>
    );
}
export default CompA;