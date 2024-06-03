export class RenderBars {
    constructor(barsContainer) {
        this.barsContainer = barsContainer;
        this.render = (length) => {
            const barValues = this.generateRandomNumbers(length);
            this.barsContainer.innerHTML = '';
            for (let i = 0; i < barValues.length; i++) {
                const div = document.createElement('div');
                div.className = 'bar';
                div.style.height = `${barValues[i] * 5}px`;
                const span = document.createElement('span');
                span.innerText = barValues[i].toString();
                div.appendChild(span);
                this.barsContainer.appendChild(div);
            }
        };
        this.generateRandomNumbers = (length) => {
            let randomNumbers = [];
            for (let i = 0; i < length; i++) {
                let randomNumber = Math.floor(Math.random() * (100 + 1));
                randomNumbers.push(randomNumber);
            }
            return randomNumbers;
        };
    }
}
