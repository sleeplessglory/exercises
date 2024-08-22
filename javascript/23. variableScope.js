//A place where a variable is recognised and accessible (local or global)
let g = 4; //global scrope (outside of a function)
function f1(){
    let l = 1; //"l" is local within f1(), hence, it can be declared again within another f()
    console.log(l); //if "l" was global as well, the result would be the local value
    console.log(g); //global variable can be accessed by functions
}
function f2(){ //f2() can't get access to "l" within f1() and vice versa
    let l = 2; //local scope
    console.log(l);
    console.log(g);
}