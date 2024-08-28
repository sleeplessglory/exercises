//Click event is an interaction when a user clicks on a specific element
//We can respond to clicks by passing a callback to the onClick event handler
function Button(){
    
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name}, you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name}, stop clicking me!`);
        }
    };
    //"e" means "event" as a shortened way (it's an object)
    const handleClick2 = (e) => e.target.textContent = "Ouch!";
    
    return(
        <>
            <button onClick={() => handleClick("sleeplessglory")}>Click me 😊</button> 
            <button onDoubleClick={(e) => handleClick2(e)}>Click me twice 😊</button> 
            {/*"() =>" is used to invoke a callback (when passing an argument) in
            order to prevent invoking before clicking the button*/}
        </>);
}
export default Button;