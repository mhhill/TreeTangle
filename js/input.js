import { start } from './game.js';

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let degrees = '0deg';
let initalKeyPress = false;

window.addEventListener('keydown', e => {
    validateInput();
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 };
            degrees = '0deg';
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 };
            degrees = '180deg';
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 };
            degrees = '270deg';
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 };
            degrees = '90deg';
            break
    }
});

window.addEventListener("touchstart", validateInput);
window.addEventListener("click", validateInput);

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

export function getDegrees() {
    return degrees;
}

function validateInput() {
    if (!initalKeyPress) {
        initalKeyPress = true;
        start();
    }
}