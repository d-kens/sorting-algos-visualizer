"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => (0, utils_1.renderBars)(50));
}
