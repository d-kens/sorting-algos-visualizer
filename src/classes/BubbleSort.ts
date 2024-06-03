import { Sort } from "./Sort.js"

export class BubbleSort extends Sort {
    async sort(elements: HTMLDivElement[]) {

        for (let i = 0; i < elements.length - 1; i++) {
            for (let j = 0; j < elements.length - i - 1; j++) {

                elements[j].style.background = 'red';
                elements[j + 1].style.background = 'red';

                await new Promise(resolve => setTimeout(resolve, 2000));


                if(this.compare(elements[j], elements[j + 1])) {
                    this.swap(elements[j], elements[j + 1]);
                }

                elements[j].style.background = '';
                elements[j+1].style.background = '';
            }

            elements[elements.length - i - 1].style.background = 'green';
        }
    }
}

