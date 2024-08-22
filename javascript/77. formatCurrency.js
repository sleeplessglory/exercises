//.toLocaleString() returns a string with a language 
//sensitive representation of a number

//Intl.NumberFormat() is another (advanced) way to format currency (to learn on my own)

//number.toLocaleString("locale", {options});
//'locale' specifies the language (undefined = default set in browsers)
//'options' is an object with formatting options

let number = 123456.789;
number = number.toLocaleString("en-AU"); //English (Australia)
console.log(`Australian format: ${number}`);

number = number.toLocaleString("nl-NL");
console.log(`Dutch format: ${number}`);

number = number.toLocaleString("de-DE");
console.log(`German format: ${number}`);

number = number.toLocaleString(undefined);
console.log(`My format: ${number}`);

number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(`German format with currency: ${number}`);