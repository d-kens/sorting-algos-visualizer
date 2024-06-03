import { RenderBars } from "./classes/RenderTemplate.js";
const barsContainer = document.getElementById('bars-wrapper');
const newArrayButton = document.getElementById('new-array-btn');
const renderBars = new RenderBars(barsContainer);
window.addEventListener('load', () => {
    renderBars.render(100);
});
newArrayButton.addEventListener('click', (event) => {
    renderBars.render(100);
});
