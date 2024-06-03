export class Sort {
    elementHeight(element) {
        const computedStyle = window.getComputedStyle(element);
        const height = computedStyle.getPropertyValue('height');
        const indexOfPx = height.indexOf('px');
        return indexOfPx !== -1 ? parseInt(height.substring(0, indexOfPx)) : 0;
    }
    compare(leftElement, rightElement) {
        return this.elementHeight(leftElement) >= this.elementHeight(rightElement);
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
