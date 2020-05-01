import { Renderer } from './renderer.js';

document.addEventListener("DOMContentLoaded", function(event) {
    const renderer = new Renderer();
    renderer.res = '/res/obj/';
    renderer.addGrid(100, 10);
    renderer.addAxes(10, 10);
    renderer.start();
}); 
