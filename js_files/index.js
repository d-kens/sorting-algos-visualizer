import { createBars } from "./createBars.js";
import { bubbleSort } from "./bubble.js";


window.addEventListener('load', createBars);
const newArrayButton = document.getElementById('new-array-btn');
newArrayButton.addEventListener('click', createBars);

const bubbleSortELements = document.getElementById('bubble');
bubbleSortELements.addEventListener('click', bubbleSort);


