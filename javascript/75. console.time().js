console.time("test"); //pass any label you want to identify the process
for (let i=0; i<1000000000; i++) {
    //do smth
}
console.timeEnd("test");


function loadData(){
    console.time("loadData");
    for(let i=0; i<1000000000; i++) {
        //pretend loading
    }
    console.timeEnd("loadData");
}
loadData();


function processData(){
    console.time("processData");
    for(let i=0; i<1000000; i++) {
        //pretend processing
    }
    console.timeEnd("processData");
}
processData();