//onChange is an event handler used primarily with form elements (e.g. <input>,
//<textarea>, <select>, <radio>, etc.)
//Triggers a function every time the value of the input changes
import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("Guest");
    function handleNameChange(event) {
        setName(event.target.value);
    }

    const [quantity, setQuantity] = useState(1);
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    const [comment, setComment] = useState("");
    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    const [payment, setPayment] = useState("");
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    const [shipping, setShipping] = useState("Delivery");
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                       checked={shipping === "Pick Up"}
                       onChange={handleShippingChange} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default MyComponent;