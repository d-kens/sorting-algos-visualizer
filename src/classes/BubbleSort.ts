import { Sorter } from "./Sorter.js";
import { getElementHeightAsNumber } from "../utils.js";

export class BubbleSort extends Sorter {
    async sort(): Promise<boolean> {

        this.isSorting = true;

        for (let i = 0; i < this.elements.length - 1; i++) {
            for (let j = 0; j < this.elements.length - i - 1; j++) {

                this.elements[j].style.background = 'red';
                this.elements[j+1].style.background = 'red';

                await new Promise(resolve => setTimeout(resolve, 2000));

                const leftElementHeight = getElementHeightAsNumber(this.elements[j]);
                const rightElementHeight = getElementHeightAsNumber(this.elements[j + 1]);

                if(this.compare(leftElementHeight, rightElementHeight)) {
                    this.swap(this.elements[j], this.elements[j+1])
                }
    
                this.elements[j].style.background = '';
                this.elements[j+1].style.background = '';
            }

            this.elements[this.elements.length - i - 1].style.background = 'green';
        }

        this.isSorting = false;

        return this.isSorting;
    }
}