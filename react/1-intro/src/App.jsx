//To use JS code within JSX code (within "return()"), wrap it with {JS code...}
//To comment within JSX "return()" code, use {/*Any comment...*/}
//Otherwise comments and JS code are written as always
//Same components can be added as many times as we want, in any order
//Components contain HTML or/and JS code

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';

function App() {
    return( //can return only a single parent component (children ones within too)
        
        <> {/*Use these empty tags to return multiple tags as below*/}
            <Header></Header> {/*<Header/> is the same way as <Header></Header>*/}
            <Food/>
            <Food/>
            <Footer/>
        </>
        
    );
}

export default App;