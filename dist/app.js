var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import 
import { RenderBars } from "./classes/RenderTemplate.js";
import { BubbleSort } from "./classes/BubbleSort.js";
import { SelectionSort } from "./classes/SelectionSort.js";
const barsContainer = document.getElementById('bars-wrapper');
const renderBars = new RenderBars(barsContainer);
renderBars.render(10);
const newArrayBtn = document.querySelector('.newArray');
newArrayBtn === null || newArrayBtn === void 0 ? void 0 : newArrayBtn.addEventListener('click', (event) => {
    console.log(event);
    renderBars.render(10);
});
const barsList = document.querySelectorAll('.bar');
const sortingBtnContainer = document.querySelector('.sortingBtns');
const sortingButtons = sortingBtnContainer.querySelectorAll('.btn');
sortingButtons.forEach((button) => {
    button.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
        const targetButton = event.currentTarget;
        disableBtns();
        switch (true) {
            case targetButton.classList.contains('bubbleSort'):
                const bubbleSort = new BubbleSort();
                yield bubbleSort.sort(barsList);
                break;
            case targetButton.classList.contains('selectionSort'):
                const selectionSort = new SelectionSort();
                yield selectionSort.sort(barsList);
                break;
            default:
                console.log('Unknown sort type');
        }
        enableBtns();
    }));
});
// functions 
const disableBtns = () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.disabled = true;
    });
};
const enableBtns = () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.disabled = false;
    });
};
