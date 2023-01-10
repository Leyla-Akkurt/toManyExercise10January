let grocery = ["Chicken breast", "Coca cola", "fruits", "sour cream", "pasta"];

let copyMihai =grocery.slice();
let copyLeyla = grocery.slice();
let copyManuel = grocery.slice();


//console.log(copy);

//Extract elements from index 1 to index 3 (not inclusive) Coca cola and fruits 
let extract = grocery.slice(1,3);

//console.log(extract);

// SPLICE Add "Fanta" and "Pepsi" at theend of the array
copyMihai.splice(copyMihai.length,0,"Fanta","Pepsi");
copyLeyla.splice(copyLeyla.length,0,"Fanta","Pepsi");
copyManuel.splice(copyManuel.length, 0,"Fanta","Pepsi");
// console.log(copyMihai);
// console.log(copyLeyla);
// console.log(copyManuel);

//Exercise 2. Add "Fanta" and "Pepsi" ad the beggining of the array
let copyMihai2 =grocery.slice();
let copyLeyla2 = grocery.slice();
let copyManuel2 = grocery.slice();
copyMihai2.splice(0,0,"Fanta","Pepsi");
copyLeyla2.splice(0,0,"Fanta","Pepsi");
copyManuel2.splice(0,0,"Fanta","Pepsi");


// console.log(copyMihai2);
// console.log(copyLeyla2)
// console.log(copyManuel2)

// Remove "Coca cola" from the array

let copyMihai3 =grocery.slice();
let copyLeyla3 = grocery.slice();
let copyManuel3 = grocery.slice();


copyMihai3.splice(1,1);
copyLeyla3.splice(1,1);
let removedElement = copyManuel3.splice(1,1);

// console.log(copyMihai3);
// console.log(copyLeyla3);
// console.log(copyManuel3);
// console.log(removedElement);

/*

 Exercise 1. Create a simple promise
 
 - create a function returnData that returns a promise
 - inside the function we will create a variable example which will be equal to "10th January"
 - return a new promise which will resolve the variable after two seconds 

*/
// function returnData(){
//     let variable="10th January";
//     return new Promise(resolve => {
//       setInterval(()=>console.log(variable),2000);
//     });
// }

// function returnData(){
//     let var = "10th January";
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve(var);
//         },2000)
//     })
// }


// function returnData(){
//     let var = "10th January";
//     return new Promise ((resolve, reject) => {
//         setTimeout() => {
//             console.log();      
//         },2000
// })


function returnData() {
    return new Promise ((resolve, reject) => {
        let variable = "10th January";
        setTimeout(() => {
            resolve(variable)
        }, 2000)
    });
}

let promise = returnData();

promise.then(variable => {
    console.log(variable)
});