import { update as updateSeason, draw as drawSeason } from './season.js';
import {
  update as updateCar,
  draw as drawCar,
  CAR_SPEED,
  getCarPosition,
} from './car.js';
import { update as updateFood, draw as drawFood, hitTree } from './tree.js';
import { update as updateBomb, draw as drawBomb } from './bomb.js';
import { update as updateGas, draw as drawGas } from './gas.js';
import { update as updateDiamond, draw as drawDiamond } from './diamond.js';
import {
  update as updateScore,
  draw as drawScore,
  totalScore,
} from './score.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
const menu = document.getElementById('menu');

function main(currentTime) {
  if (gameOver) {
    if (
      confirm(`You crashed! \nScore: ${totalScore} \n\nPress ok to restart.`)
    ) {
      window.location = '/game';
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / CAR_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateSeason();
  updateCar();
  updateFood();
  updateDiamond();
  updateBomb();
  updateGas();
  updateScore();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSeason(gameBoard);
  drawCar(gameBoard);
  drawFood(gameBoard);
  drawDiamond(gameBoard);
  drawGas(gameBoard);
  drawBomb(gameBoard);
  drawScore(gameBoard);
}

export function start() {
  menu.style.display = 'none';
  gameBoard.style.display = 'grid';
  window.requestAnimationFrame(main);
}

function checkDeath() {
  gameOver = outsideGrid(getCarPosition()) || hitTree(getCarPosition());
}
