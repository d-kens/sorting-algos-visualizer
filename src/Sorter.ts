export abstract class Sorter {
    isSorting: boolean = false;
    
    constructor(public elements: HTMLDivElement[]) {}

    abstract sort(): Promise<boolean>;

    swap (leftElement: HTMLDivElement, rightElement: HTMLDivElement) {
        const leftElementHeight = window.getComputedStyle(leftElement).getPropertyValue('height');
        const rightElementHeight = window.getComputedStyle(rightElement).getPropertyValue('height');
    
    
        const leftSpan = leftElement.querySelector('span') as HTMLSpanElement;
        const rightSpan = rightElement.querySelector('span') as HTMLSpanElement;

        const leftSpanText = leftSpan.innerText;
        leftSpan.innerText = rightSpan.innerText;
        rightSpan.innerText = leftSpanText;
    
        leftElement.style.height = rightElementHeight;
        rightElement.style.height = leftElementHeight;
    }   

}

