
export abstract class Sort {

    private elementHeight (element: HTMLDivElement): number {
        const computedStyle= window.getComputedStyle(element);
        const height = computedStyle.getPropertyValue('height');

        const indexOfPx = height.indexOf('px');
        return indexOfPx !== -1 ? parseInt(height.substring(0, indexOfPx)) : 0;
    }

    compare(leftElement: HTMLDivElement, rightElement:HTMLDivElement): boolean {
        return this.elementHeight(leftElement) >= this.elementHeight(rightElement);
    }


    swap(leftElement: HTMLDivElement, rightElement: HTMLDivElement) {
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


    abstract sort(elements: HTMLDivElement[]): void;
}
