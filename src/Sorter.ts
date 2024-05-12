abstract class Sorter {
    isSorted: boolean = false;
    elements: HTMLDivElement[] = [];

    constructor(elements: HTMLDivElement[]) {
        this.elements = elements;
    }

    abstract sort(): boolean;

    swap (leftElement: HTMLDivElement, rightElement: HTMLDivElement) {
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


// swap(leftElement: HTMLDivElement, rightElement: HTMLDivElement) {
//     const leftSpan = leftElement.querySelector('span') as HTMLSpanElement | null;
//     const rightSpan = rightElement.querySelector('span') as HTMLSpanElement | null;

//     if (leftSpan && rightSpan) {
//         const leftSpanText = leftSpan.innerText;
//         leftSpan.innerText = rightSpan.innerText;
//         rightSpan.innerText = leftSpanText;

//         const leftElementHeight = window.getComputedStyle(leftElement).getPropertyValue('height');
//         const rightElementHeight = window.getComputedStyle(rightElement).getPropertyValue('height');

//         leftElement.style.height = rightElementHeight;
//         rightElement.style.height = leftElementHeight;
//     }
// }