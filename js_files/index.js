import { createBars } from "./createBars.js";
import { bubbleSort } from "./bubble.js";


window.addEventListener('load', createBars);
const newArrayButton = document.getElementById('new-array-btn');
newArrayButton.addEventListener('click', createBars);

const bubbleSortELements = document.getElementById('bubble');
bubbleSortELements.addEventListener('click', bubbleSort);


function extractNumericPart(str) {
    const indexOfPx = str.indexOf("px"); // Find the index of "px"
    return indexOfPx !== -1 ? parseInt(str.substring(0, indexOfPx)) : 0; // Extract substring before "px"
}


console.log(extractNumericPart('990px'));
console.log(extractNumericPart('9px'));
console.log(extractNumericPart('990px'));
let value =  extractNumericPart('0px')
console.log(typeof value)



