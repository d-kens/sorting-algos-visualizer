import { RenderBars } from "./classes/RenderTemplate";
const barsContainer = document.getElementById('bars-wrapper');
const renderBars = new RenderBars(barsContainer);
window.addEventListener('load', () => {
    renderBars.render(100);
});
