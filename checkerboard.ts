"use strict";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawSquare (startX: number, startY: number, size: number, color: string ) {
    ctx.fillStyle = color;
    ctx.fillRect(startX, startY, size, size);
}


let squareSize: number = 50;
let greenColorArray: string[] = ["#016868", "#015c5d", "#015151", "#014546", "#013a3a", "#002e2e", "#002323", "#001717", "#000b0c", "#000000"];
let yellowColorArray: string[] = ["#fdfae5", "#faf3c0", "#f5ea92", "#f3e260", "#f5dd29", "#f2d600", "#e6c60d", "#d9b51c", "#cca42b", "#bd903c"];


for (let i: number = 0; i < 2; i++) {
    for (let j: number = 0; j < 4; j++) {
        for (let k: number = 0; k < 6; k++) {
            for (let l: number = 0; l < 10; l++) {
                let layers: number = squareSize - l * (squareSize / 10);
                for (let m: number = 0; m < 4; m++) {
                    let startPoint1: number = i * squareSize;
                    let startPoint2: number = squareSize - i * squareSize;
                    if (m % 2 === 0) {
                        drawSquare (startPoint1 + k * 2 * squareSize, startPoint1 + j * 2 * squareSize, layers, greenColorArray[l]);
                    } else {
                        drawSquare (startPoint2 + k * 2 * squareSize, startPoint1 + j * 2 * squareSize, layers, yellowColorArray[l]);
                    } 
                } 
            }
        }
    }
}


export {};
