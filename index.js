//Es6

/****  JavaScript Design Patterns ****/

/* Functions As First Class Citizens */
/* Functions Treated Like A Variable  */

var arr = [5, 3, 5, 7, 8, 6, -2, 0];

 const calcMin = () => {
    return Math.min(...arr);
 }

 const calcMax = () => {
    return Math.max(...arr);
 }

/* Functions Can Be Assigned As A Value To A Variable */
/* Functions Can Be Passed Inside Of A Variable (This Variable Holds 12 because it calls the calc function and stores the value in aNumber) */

let maxNum = calcMax();
let minNum = calcMin();
 
/* Passing A Function As An Argument To Console Log */
console.log( minNum );
console.log( maxNum );
 
/***** Callback Functions *****/

/* A Callback Function Is A Function That Is Called Inside Another Function */

const printNum = (callBackHell) => { 
    console.log(callBackHell())
}

 printNum(calcMin)
 printNum(calcMax)
 
 
