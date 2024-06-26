var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Sorter } from "./Sorter";
import { getElementHeightAsNumber } from "./utils";
export class BubbleSort extends Sorter {
    sort() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isSorting = true;
            for (let i = 0; i < this.elements.length - 1; i++) {
                for (let j = 0; j < this.elements.length - i - 1; j++) {
                    this.elements[j].style.background = 'red';
                    this.elements[j + 1].style.background = 'red';
                    yield new Promise(resolve => setTimeout(resolve, 2000));
                    const leftElementHeight = getElementHeightAsNumber(this.elements[j]);
                    const rightElementHeight = getElementHeightAsNumber(this.elements[j + 1]);
                    if (leftElementHeight > rightElementHeight) {
                        this.swap(this.elements[j], this.elements[j + 1]);
                    }
                    this.elements[j].style.background = '';
                    this.elements[j + 1].style.background = '';
                }
                this.elements[this.elements.length - i - 1].style.background = 'green';
            }
            this.isSorting = false;
            return this.isSorting;
        });
    }
}
