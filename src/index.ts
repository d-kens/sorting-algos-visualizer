
import { renderBars } from "./utils";

if (typeof window !== 'undefined') {
    window.addEventListener('load', () => renderBars(50));
}
