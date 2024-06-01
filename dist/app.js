import { RenderBars } from "./classes/RenderTemplate.js";
const barsContainer = document.getElementById('bars-wrapper');
const renderBars = new RenderBars(barsContainer);
window.addEventListener('load', () => {
    renderBars.render(100);
});
