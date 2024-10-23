//useContext() is a React Hook that allows yo share values between
//multiple levels of components without passing props through each level

//PROVIDER COMPONENT has to be set up (which component has the data we'd like access to?)
//1. import {createContext} from 'react';
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//          <Child />
//   </MyContext.Provider>

//CONSUMER COMPONENTS
//1. import React, {useContext} from 'react';
//   import {MyContext} from './CompA';
//2. const value = useContext(MyContext);
import React from 'react';
import CompA from './CompA.jsx';
function App() {
    return(
        <CompA />
    );
}

export default App;
