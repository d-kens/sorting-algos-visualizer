var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Sort } from "./Sort.js";
export class SelectionSort extends Sort {
    sort(elements) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < elements.length - 1; i++) {
                // find the minimum in the unsorted array
                let minIndex = i;
                for (let j = i + 1; j < elements.length; j++) {
                    elements[minIndex].style.background = 'red';
                    elements[j].style.background = 'red';
                    yield new Promise(resolve => setTimeout(resolve, 2000));
                    if (!this.compare(elements[j], elements[minIndex])) {
                        elements[minIndex].style.background = ''; // reset previous minIndex color
                        minIndex = j;
                    }
                    elements[j].style.background = '';
                    elements[minIndex].style.background = 'red'; // highlight new minIndex
                }
                this.swap(elements[i], elements[minIndex]);
                elements[minIndex].style.background = ''; // reset minIndex color after swapping
                elements[i].style.background = 'green'; // mark sorted element as green
            }
            elements[elements.length - 1].style.background = 'green'; // mark the last element as sorted
        });
    }
}
/*
Selection Sort
- Works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted protion of the list.
    1. Start with the first element in the array.
    2. Scan the unsorted portion of the array to find the smallest/largest element.
    3. Swap the smallest (or largest) element with first element of the unsorted portion. This moves the smallest (or largest) element to its correct position in the sorted portion of the array.
    4. Move the boundary between the sorted and unsorted portions one element to the right and repeat the untire process until the entire array is sorted.

*/ 
