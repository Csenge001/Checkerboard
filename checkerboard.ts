"use strict";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


function drawSquare (startX: number, startY: number, size: number, color: string ) {
    ctx.fillStyle = color;
    ctx.fillRect(startX, startY, size, size);
}


let colorArray1: string[] = ["#016868", "#015c5d", "#015151", "#014546", "#013a3a", "#002e2e", "#002323", "#001717", "#000b0c", "#000000"];
let colorArray2: string[] = ["#fdfae5", "#faf3c0", "#f5ea92", "#f3e260", "#f5dd29", "#f2d600", "#e6c60d", "#d9b51c", "#cca42b", "#bd903c"];


for (let k: number = 0; k < 4; k++) {
    for (let j: number = 0; j < 6; j++) {
        for (let i: number = 0; i < 10; i++) {
            let layers: number = (50 - (i * (50 / 10)));
            drawSquare (0 + j * 100, 0 + k * 100, layers, colorArray1[i]);
        }
    }
}


for (let k: number = 0; k < 4; k++) {
    for (let j: number = 0; j < 6; j++) {
        for (let i: number = 0; i < 10; i++) {
            let layers: number = (50 - (i * (50 / 10)));
            drawSquare (50 + j * 100, 50 + k * 100, layers, colorArray1[i]);
        }
    }
}


for (let k: number = 0; k < 4; k++) {
    for (let j: number = 0; j < 6; j++) {
        for (let i: number = 0; i < 10; i++) {
            let layers: number = (50 - (i * (50 / 10)));
            drawSquare (50 + j * 100, 0 + k * 100, layers, colorArray2[i]);
        }
    }
}


for (let k: number = 0; k < 4; k++) {
    for (let j: number = 0; j < 6; j++) {
        for (let i: number = 0; i < 10; i++) {
            let layers: number = (50 - (i * (50 / 10)));
            drawSquare (0 + j * 100, 50 + k * 100, layers, colorArray2[i]);
        }
    }
}
