//fetch() is a function used for making HTTP requests to fetch resources
//(JSON style data, images, files, etc.)
//The fetch() function returns a Promise which is fulfilled with 
//a Response object representing the server's response

//Simplifies asynchronous fata fetching in JS and used for interacting
//with APIs (application programming interface) to retrieve and send data asynchronously over the web
//fetch(url, {options})
//fetch(url, {method: "GET/POST/PUT/DELETE"}) is more advanced to be learned
//fetch() is promise-based meaning it resolves or rejects
fetch("https://pokeapi.co/api/v2/pokemon/pikachu") //even if we can't locate a resource, fetch() promise will resolve anyway
    .then(response => response.json()) //if console.log(response), status: 200 means the HTTP response status code (from 100 to 599) 
    .then(data => console.log(data.name)) //data is what returns after response.json()
    .catch(error => console.error(error));

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        if(!response.ok){
            throw new Error("Couldn't fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));


async function fetchData(){
    try{
        const charName = document.getElementById("charName").value.toLowerCase();
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${charName}`);
        if(!response.ok){
            throw new Error("Couldn't fetch resource");
        }
        const data = await response.json(); //response.json() also returns a promise
        const charImage = data.sprites.front_default; //properties can be accessed via console.log(data)
        const imgElement = document.getElementById("imgElement");

        imgElement.src = charImage; //accessing "src" attribute of the <img>
        imgElement.style.display = "block"; //now it's visible
    }
    catch(error){
        console.error(error);
    }
}
//fetchData();