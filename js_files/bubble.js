import { swap } from "./swap.js";

export async function bubbleSort() {
    let elements = document.getElementsByClassName('bar');

    for(let i = 0; i < elements.length - 1; i++) {
        for (let j = 0; j < elements.length - i - 1; j++) {
            
            elements[j].style.background = 'red';
            elements[j+1].style.background = 'red';

            await new Promise(resolve => setTimeout(resolve, 200));

            const leftElementHeight = parseInt(window.getComputedStyle(elements[j]).height.match(/\d+/)[0]);
            const rightElementHeight = parseInt(window.getComputedStyle(elements[j + 1]).height.match(/\d+/)[0]);


            if(leftElementHeight > rightElementHeight) {
                swap(elements[j], elements[j+1])
            }

            elements[j].style.background = '';
            elements[j+1].style.background = '';
        }

        elements[elements.length - i - 1].style.background = 'green';
    }
}




