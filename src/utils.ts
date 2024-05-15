

export const getElementHeightAsNumber = (element: Element):number => {
    const computedStyle= window.getComputedStyle(element);
    const height = computedStyle.getPropertyPriority('height');

    const indexOfPx = height.indexOf('px');
    return indexOfPx !== -1 ? parseInt(height.substring(0, indexOfPx)) : 0;
}

export const generateRandomNumbers = (length: number): number[] => {
    let randomNumbers: number[] = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (length + 1));
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

export const renderBars = (length: number): void => {
    const randomNumbers = generateRandomNumbers(length);

    let barsWrapper = document.getElementById('bars-wrapper') as HTMLDivElement;
    barsWrapper.innerHTML = '';

    for (let i = 0; i < randomNumbers.length; i++) {
        const div = document.createElement('div');
        div.className = 'bar';
        div.style.height = `${randomNumbers[i] * 5}px`;

        const span = document.createElement('span');
        span.innerText = randomNumbers[i].toString();
        div.appendChild(span);
        barsWrapper.appendChild(div);
    }
}




