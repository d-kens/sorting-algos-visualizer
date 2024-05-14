"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(elements) {
        this.elements = elements;
        this.isSorting = false;
    }
    swap(leftElement, rightElement) {
        const leftElementHeight = window.getComputedStyle(leftElement).getPropertyValue('height');
        const rightElementHeight = window.getComputedStyle(rightElement).getPropertyValue('height');
        const leftSpan = leftElement.querySelector('span');
        const rightSpan = rightElement.querySelector('span');
        const leftSpanText = leftSpan.innerText;
        leftSpan.innerText = rightSpan.innerText;
        rightSpan.innerText = leftSpanText;
        leftElement.style.height = rightElementHeight;
        rightElement.style.height = leftElementHeight;
    }
}
exports.Sorter = Sorter;
