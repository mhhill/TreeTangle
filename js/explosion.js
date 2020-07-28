var x;
var y;

export function explosion(item) {
    x = item.x;
    y = item.y;
}

export function draw(gameBoard) {
    const e = document.createElement('img');
    e.src = 'img/game-over.png';
    e.style.gridRowStart = y;
    e.style.gridColumnStart = x;
    gameBoard.appendChild(e);
}