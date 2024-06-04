// import 
import { RenderBars } from "./classes/RenderTemplate.js";
import { BubbleSort } from "./classes/BubbleSort.js";
import { SelectionSort } from "./classes/SelectionSort.js";


const barsContainer = document.getElementById('bars-wrapper') as HTMLDivElement;

const renderBars = new RenderBars(barsContainer)
renderBars.render(10);


const newArrayBtn = document.querySelector('.newArray');
newArrayBtn?.addEventListener('click', (event) => {
    console.log(event);
    renderBars.render(10);
});


const barsList: NodeListOf<HTMLDivElement> = document.querySelectorAll('.bar');

const sortingBtnContainer = document.querySelector('.sortingBtns')!;
const sortingButtons: NodeListOf<HTMLButtonElement> = sortingBtnContainer.querySelectorAll('.btn');
sortingButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', async (event) => {
        const targetButton = event.currentTarget as HTMLButtonElement;
        
        disableBtns();

        switch (true) {
            case targetButton.classList.contains('bubbleSort'):
                const bubbleSort = new BubbleSort();
                await bubbleSort.sort(barsList);
                break;
            case targetButton.classList.contains('selectionSort'):
                const selectionSort = new SelectionSort();
                await selectionSort.sort(barsList);
                break;
            default:
                console.log('Unknown sort type');
        }

        enableBtns();

    })
})




// functions 
const disableBtns = (): void => {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn')
    buttons.forEach((button: HTMLButtonElement) => {
        button.disabled = true;
    });
}


const enableBtns = (): void => {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn')
    buttons.forEach((button: HTMLButtonElement) => {
        button.disabled = false;
    })
}


