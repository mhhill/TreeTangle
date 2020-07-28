import { getInputDirection, getDegrees } from "./input.js";

export let CAR_SPEED = 6;
const carPosition = [{ x: 11, y: 11}];

export function update() {
    const inputDirection = getInputDirection();

    carPosition[0].x += inputDirection.x;
    carPosition[0].y += inputDirection.y;

}

export function draw(gameBoard) {
    const deg = getDegrees();
    carPosition.forEach(segment => {
        const img = document.createElement('img');
        img.src = 'img/car.png';
        img.style.gridRowStart = segment.y;
        img.style.gridColumnStart = segment.x;
        img.style.transform = `rotate(${deg})`;
        gameBoard.appendChild(img);
    })
}

export function onCar(position) {
    return carPosition.some(segment => {
        return equalPositions(segment, position)
    })
}

export function getCarPosition() {
    return carPosition[0];
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function updateCarSpeed(speed) {
    CAR_SPEED += speed;
    setTimeout(() => { CAR_SPEED = 6; }, 5000);
}