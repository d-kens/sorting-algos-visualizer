import { RenderBars } from "./classes/RenderTemplate.js";
import { BubbleSort } from "./classes/BubbleSort.js";

const barsContainer = document.getElementById('bars-wrapper') as HTMLDivElement;
const newArrayButton = document.getElementById('new-array-btn') as HTMLButtonElement;

const renderBars = new RenderBars(barsContainer)

renderBars.render(100);


newArrayButton.addEventListener('click', (event) => {
   renderBars.render(100);
})


const nodeList = document.querySelectorAll('.bar');
const barList: HTMLDivElement[] = Array.from(nodeList).filter((element): element is HTMLDivElement => element instanceof HTMLDivElement);
console.log('Bar list: ', barList)

const bubbleSortBtn = document.getElementById('bubble');

bubbleSortBtn?.addEventListener('click', (e) => {
    console.log(e)

    const bubbleSort = new BubbleSort();
    bubbleSort.sort(barList)
})