import icon from '../../src/assets/images/icon-square-big.png';
function App() {
    console.log("Hello, Webpack!");
    return(
        <>
            <div className="container">
                <h1>Webpack course</h1>
                <img src={icon} height="400" alt="Webpack icon" title="Webpack icon"></img>
            </div>
        </>
    );
}
export default App;