import { onCar, updateCarSpeed } from './car.js';
import { increaseGasScore } from './score.js';

let gas = { x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1 };

export function update() {
    if (onCar(gas)) {
        updateCarSpeed(6);
        increaseGasScore();
        gas = { x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1 };
    }
}

export function draw(gameBoard) {
    const itemElement = document.createElement('img');
    itemElement.src = 'img/gas.png';
    itemElement.style.gridRowStart = gas.y;
    itemElement.style.gridColumnStart = gas.x;
    gameBoard.appendChild(itemElement);
}