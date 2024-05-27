export class RenderBars {

    constructor(private barsContainer: HTMLDivElement) {}

    render = (length: number) => {
        const barValues = this.generateRandomNumbers(length);

        this.barsContainer.innerHTML = '';

        for (let i = 0; i < barValues.length; i++) {
            const div = document.createElement('div');
            div.className = 'bar';
            div.style.height = `${barValues[i] * 5}px`

            const span = document.createElement('span');
            span.innerText = barValues[i].toString();


            div.appendChild(span);
            this.barsContainer.appendChild(div)
        }

    }

    private generateRandomNumbers = (length: number): number[] => {
        let randomNumbers: number[] = [];

        console.log(length)

        for(let i = 0; i < length; i++) {
            let randomNumber = Math.floor(Math.random() * (100 + 1));
            randomNumbers.push(randomNumber);
        }

        return randomNumbers;
    }
}



