import { Renderer } from '../dist/renderer.esm.js';

document.addEventListener("DOMContentLoaded", function(event) {
    const renderer = new Renderer({ control: true });
    renderer.res = '/res/obj/';
    renderer.addGrid(100, 10);
    renderer.addAxes(10, 10);
    renderer.start();
}); 
