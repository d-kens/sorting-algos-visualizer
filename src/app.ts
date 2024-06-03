// import 
import { RenderBars } from "./classes/RenderTemplate.js";
import { BubbleSort } from "./classes/BubbleSort.js";


const barsContainer = document.getElementById('bars-wrapper') as HTMLDivElement;

const renderBars = new RenderBars(barsContainer)
renderBars.render(100);


const newArrayBtn = document.querySelector('.newArray');
newArrayBtn?.addEventListener('click', (event) => {
    console.log(event);
    renderBars.render(100);
});


const barsList: NodeListOf<HTMLDivElement> = document.querySelectorAll('.bar');

const sortingBtnContainer = document.querySelector('.sortingBtns')!;
const sortingButtons: NodeListOf<HTMLButtonElement> = sortingBtnContainer.querySelectorAll('.btn');
sortingButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', async (event) => {
        const targetButton = event.currentTarget as HTMLButtonElement;
        
        disableBtns(sortingButtons);

        switch (true) {
            case targetButton.classList.contains('bubbleSort'):
                const bubbleSort = new BubbleSort();
                await bubbleSort.sort(barsList);
                break;
            default:
                console.log('Unknown sort type');
        }

        enableBtns(sortingButtons);

    })
})




// functions 
const disableBtns = (buttons: NodeListOf<HTMLButtonElement>): void => {
    buttons.forEach((button: HTMLButtonElement) => {
        button.disabled = true;
    });
}


const enableBtns = (buttons: NodeListOf<HTMLButtonElement>): void => {
    buttons.forEach((button: HTMLButtonElement) => {
        button.disabled = false;
    })
}


