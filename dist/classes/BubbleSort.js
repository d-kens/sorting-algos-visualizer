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
export class BubbleSort extends Sort {
    sort(elements) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < elements.length - 1; i++) {
                for (let j = 0; j < elements.length - i - 1; j++) {
                    elements[j].style.background = 'red';
                    elements[j + 1].style.background = 'red';
                    yield new Promise(resolve => setTimeout(resolve, 2000));
                    if (this.compare(elements[j], elements[j + 1])) {
                        this.swap(elements[j], elements[j + 1]);
                    }
                    elements[j].style.background = '';
                    elements[j + 1].style.background = '';
                }
                elements[elements.length - i - 1].style.background = 'green';
            }
        });
    }
}
