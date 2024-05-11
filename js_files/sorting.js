function createBars() {
    console.log('You clicke me');

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

        // const span = document.createElement('span');
        // span.textContent = numbers[i];
        // div.appendChild(span);

        barsWrapper.appendChild(div)
    }
}

// Call createBars() when the page loads
window.addEventListener('load', createBars);

const newArrayButton = document.getElementById('new-array-btn');
newArrayButton.addEventListener('click', createBars)