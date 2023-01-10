function fn(a,b){
    console.log(a," ", b);
    return;
}
function fnn(){
    let rval = "Tanu" + fn("hello", 20);
    // console.log(rval);
    return rval;
}
fnn();
let tanu = fnn();
console.log(tanu);



