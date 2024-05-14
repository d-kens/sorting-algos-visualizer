// import { createBars } from "./createBars.js";
// import { bubbleSort } from "./bubble.js";


// window.addEventListener('load', createBars);
// const newArrayButton = document.getElementById('new-array-btn');
// newArrayButton.addEventListener('click', createBars);

// const bubbleSortELements = document.getElementById('bubble');
// bubbleSortELements.addEventListener('click', bubbleSort);


// function extractNumericPart(str) {
//     const indexOfPx = str.indexOf("px"); // Find the index of "px"
//     return indexOfPx !== -1 ? parseInt(str.substring(0, indexOfPx)) : 0; // Extract substring before "px"
// }


// console.log(extractNumericPart('990px'));
// console.log(extractNumericPart('9px'));
// console.log(extractNumericPart('990px'));
// let value =  extractNumericPart('0px')
// console.log(typeof value)


// export const createBars = () => {
//     let numbers = [];

//     for (let i = 0; i < 100; i++) {
//         let randomNumber = Math.floor(Math.random() * 101);
//         numbers.push(randomNumber);
//     }

//     let barsWrapper = document.getElementById('bars-wrapper');

//     barsWrapper.innerHTML = '';

//     for (let i = 0; i < numbers.length; i++) {
//         const div = document.createElement('div');
//         div.className = 'bar';
//         div.style.height = `${numbers[i] * 5}px`;

//         const span = document.createElement('span');
//         span.innerText = numbers[i];

//         div.appendChild(span)
//         barsWrapper.appendChild(div)
//     }
// }