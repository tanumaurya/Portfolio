// no main
// top to bottom
// printt
console.log("Hello Pepcoders :) ");
// variable declare;
let a;
// default value -> undefined
// dynamically typed langauge(Js) -> ye btayenge ki a ek variable hai.
// java -> statically typed lang -> ye btayenge ki ek variable hai aur kis type ka h
//  int a;
// a me 10 hai.
//  number
a = 10;
a= 10.1;
//  boolean
a= true;
// string
a="hello";
a='I am the same';
console.log(a);
// primitive type -> SVGAnimatedNumberList, boolean , strings , null , undefined
// node filename.js -> for output




//******************* */ print 1 to 10;


// for( let i=1; i <= 10; i++){
//     // print and enter
//     console.log("the number is " +i);
// }

// print in single ->
//  process.stdout.write("" +i);


//***************** */ WHILE LOOP -> print evens

// let i=1;
// while(i <= 10){
//     if(i%2 == 0){
//         console.log("Even is "+i);
//     }
//     i++;
// }

let endnum = 20;
// check from 1 to that endnum(20)
// num is multiple of 3 -> print : Fizz
// number is multiple of 5 -> print : Buzz
//  num is multiple of 3 & 5 -> print : FizzBuzz
// none of these -> number itself
for(let i=1; i<= 20 ; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBUzz");
    }
    else if(i%3==0 ){
        console.log("Fizz");
    }
    else if(i%5==0 ){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}