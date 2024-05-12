export const createBars = () => {
    let numbers = [];

    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.floor(Math.random() * 101);
        numbers.push(randomNumber);
    }

    let barsWrapper = document.getElementById('bars-wrapper');

    barsWrapper.innerHTML = '';

    for (let i = 0; i < numbers.length; i++) {
        const div = document.createElement('div');
        div.className = 'bar';
        div.style.height = `${numbers[i] * 5}px`;

        barsWrapper.appendChild(div)
    }
}