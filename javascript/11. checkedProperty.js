//.checked is property that determines the checked state of an HTML checkbox or radio button element
const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const payPalButton = document.getElementById("payPalButton");
const submit2 = document.getElementById("submit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit2.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = "You are subscribed";
    }
    else {
        subResult.textContent = "You are not subscribed";
    }

    if (visaButton.checked) {
        paymentResult.textContent = "Your payment method is Visa";
    }
    else if (masterCardButton.checked) {
        paymentResult.textContent = "Your payment method is MasterCard";
    }
    else if (payPalButton.checked) {
        paymentResult.textContent = "Your payment method is PayPal";
    }
    else {
        paymentResult.textContent = "You must select a payment method";
    }
}