//In React the "class" attribute of an HTML tag is used as "className"
import psImage from './assets/How+Big,+How+Blue,+How+Beautiful+30.jpeg';
function Card(){
    return(
        <>
            <div className="card">
                {/*src="https://via.placeholder.com/150" will create a placeholder*/}
                <img src={psImage}
                className="cardImage"
                alt="HBHBHB photoshoot"></img>
                <h2 className="cardTitle">Florence + The Machine</h2>
                <p className="cardText">How Big, How Blue, How Beautiful photoshoot</p>
            </div>
        </>
    );
}
export default Card;