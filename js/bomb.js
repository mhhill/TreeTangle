import { onCar } from './car.js';
import { clearTree } from './tree.js';

export let bomb = [
    { x: Math.floor(Math.random() * 20) + 1, y: Math.floor(Math.random() * 20) + 1 }
];

export function update() {
    bomb.forEach((item) => {
        if (onCar(item)) {
            clearTree();
            bomb = [];
        }
        const bombChance = Math.floor(Math.random() * 150);
        if (bombChance == 7) {
            bomb.push({ x: Math.floor(Math.random() * 20) + 1, y: Math.floor(Math.random() * 20) + 1});
        }
    });
    if (bomb == '') {
        const bombChance = Math.floor(Math.random() * 150);
        if (bombChance == 7) {
            bomb.push({ x: Math.floor(Math.random() * 20) + 1, y: Math.floor(Math.random() * 20) + 1});
        }
    }
}

export function draw(gameBoard) {
    bomb.forEach((item) => {
        const bombElement = document.createElement('img');
        bombElement.src = 'img/game-over.png';
        bombElement.style.gridRowStart = item.y;
        bombElement.style.gridColumnStart = item.x;
        gameBoard.appendChild(bombElement);
    });
}
