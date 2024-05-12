export const swap = (leftElement, rightElement) => {
    const leftElementHeight = window.getComputedStyle(leftElement).getPropertyValue('height');
    const rightElementHeight = window.getComputedStyle(rightElement).getPropertyValue('height');
    leftElement.style.height = rightElementHeight;
    rightElement.style.height = leftElementHeight;
}   