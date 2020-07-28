let basicScore = 0;
let diamondScore = 0;
let gasScore = 0;
export let totalScore = 0;

export function update() {
    increaseBasicScore();
    setTotalScore();
    console.log(setTotalScore());
}

export function draw(gameBoard) {
    const scoreElement = document.createElement('div');
    scoreElement.innerText = totalScore;
    scoreElement.id = 'score';
    scoreElement.style.gridRowStart = 1;
    scoreElement.style.gridColumnStart = 21;
    gameBoard.appendChild(scoreElement);
}

function increaseBasicScore() {
    return basicScore++;
}

export function increaseDiamondScore() {
    return diamondScore += 50;
}

export function increaseGasScore() {
    return gasScore += 20;
}

function setTotalScore() {
    totalScore = basicScore + diamondScore + gasScore;
    return totalScore;
}