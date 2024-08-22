for(let i = 0; i <= 2; i++) {
    console.log(i);
}

for(let i=20; i>=0; i-=2) {
    if(i == 14){
        continue; //will skip this "i" and go to the next iteration
    }
    if (i == 12) {
        break; //gets out of the loop without the remaining iterations
    }
    console.log(i); //Results: 20, 18, 16
}