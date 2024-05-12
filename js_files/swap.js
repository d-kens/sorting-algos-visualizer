export const swap = (leftElement, rightElement) => {
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
