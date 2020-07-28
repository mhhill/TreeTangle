import { totalScore } from './score.js';

export let season = {
    id: 1,
    color: '#89bd4c'
};

export function update() {
    updateSeason();
}

export function draw(gameBoard) {
    gameBoard.style.backgroundColor = season.color;
}

function updateSeason() {
    if (totalScore < 999) {
        season.color = '#89bd4c';
        season.id = 1;
    } else if (totalScore > 999 && totalScore < 1999) {
        season.color = '#dbb38c';
        season.id = 2;
    } else if (totalScore > 1999 && totalScore < 2999) {
        season.color = '#ebf9fc';
        season.id = 3;
    }
    // else if (totalScore > 2999 && totalScore < 3999) {
    //     season.color = '#de3131';
    //     season.id = 4;
    // }
}

export function getSeason() {
    return season.id;
}