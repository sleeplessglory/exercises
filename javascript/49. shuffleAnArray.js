const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']; //playing cards array
//Better to use Fisher-Yates algorithm instead of .sort() to shuffle cards
function shuffle(array) {
    for(let i = cards.length - 1; i >=0; i--){
        const random = Math.trunc(Math.random() * (i + 1)); //random index between the end and the beginning
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);
console.log(cards);