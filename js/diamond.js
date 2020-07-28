import { onCar } from './car.js';
import { increaseDiamondScore } from './score.js';
import { randomGridPosition } from './grid.js';

let diamond = getRandomDiamondPosition();

export function update() {
    if (onCar(diamond)) {
        diamond = getRandomDiamondPosition();
        increaseDiamondScore();
    }
}

export function draw(gameBoard) {
    const itemElement = document.createElement('img');
    itemElement.src = 'img/diamond.png';
    itemElement.style.gridRowStart = diamond.y;
    itemElement.style.gridColumnStart = diamond.x;
    gameBoard.appendChild(itemElement);
}

function getRandomDiamondPosition() {
    let newDiamondPosition;
    while (newDiamondPosition == null || onCar(newDiamondPosition)) {
        newDiamondPosition = randomGridPosition();
    }
    return newDiamondPosition;
}