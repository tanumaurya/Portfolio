// array -> collection of anything
let arr = ["Rajanish", "Jasbir","Mohit","Jitendra"];
// print
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1]);


// ***************loop************


// for(let sidx=0; sidx<arr.length ;sidx++){
//     // console.log(sidx);
//     console.log(arr[sidx]);
// }

//  IMPORTANT FUNCTIONS
// ****************LAST************
// ADD
// console.log(arr);
// console.log("````````````````````````````");
// arr.push("Aman");
// arr.push("Subhesh");
// console.log(arr);
// // remove
// arr.pop();
// console.log("`````````````````````````````");
// console.log(arr);



// **********************starting*******************
// add
// console.log(arr);
// console.log("````````````````````````````");
// arr.unshift("Bruce");
// arr.unshift("tony");
// console.log(arr);
// // remove
// arr.shift();
// console.log("`````````````````````````````");
// console.log(arr);
//  slice and splice

// indexof and includes


// Write a JavaScript program to compute the union// of two arrays . 
// Input array will only have unique elements in there respective array.Input arr1= [1, 2, 3]arr2= [100, 2, 1,10]Output: [1,2,3,100,10]
let arr1= [1, 2, 3];
let arr2= [100, 2, 1,10];
for(let i=0; i<arr1.length ; i++){
    let elementToPut = arr1[i];
    let isPresent = false;
    for(let j=0; j<arr2.length; j++){
        if(elementToPut == arr2[j]){
            isPresent=true;
        }
    }
    if(isPresent == false){
        arr2.push(elementToPut);

    }

}
console.log(arr2);