"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBars = exports.generateRandomNumbers = exports.getElementHeightAsNumber = void 0;
const getElementHeightAsNumber = (element) => {
    const computedStyle = window.getComputedStyle(element);
    const height = computedStyle.getPropertyPriority('height');
    const indexOfPx = height.indexOf('px');
    return indexOfPx !== -1 ? parseInt(height.substring(0, indexOfPx)) : 0;
};
exports.getElementHeightAsNumber = getElementHeightAsNumber;
const generateRandomNumbers = (length) => {
    let randomNumbers = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (length + 1));
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
};
exports.generateRandomNumbers = generateRandomNumbers;
const renderBars = (length) => {
    const randomNumbers = (0, exports.generateRandomNumbers)(length);
    let barsWrapper = document.getElementById('bars-wrapper');
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
};
exports.renderBars = renderBars;
