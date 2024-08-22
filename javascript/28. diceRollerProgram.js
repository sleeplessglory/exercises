function rollDice() {
    const amountOfDice = document.getElementById("amountOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []; //the values of each dice
    const images = []; //to be shown accordingly

    for (let i=0; i < amountOfDice; i++) {
        let value = Math.trunc(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`); //let's call dice images accordingly. Couldn't find those images currently. So, alt names are shown instead
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}