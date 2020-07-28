import { getSeason } from "./season.js";

export let tree = [{
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
    id: getSeason()
}];

export function update() {
    generateTree();
}

export function draw(gameBoard) {
    tree.forEach((item) => {
        const treeElement = document.createElement('img');
        treeElement.src = `img/tree${item.id}.png`;
        treeElement.style.gridRowStart = item.y;
        treeElement.style.gridColumnStart = item.x;
        gameBoard.appendChild(treeElement);
    });
}

export function clearTree() {
    tree = [{
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1,
        id: getSeason()
    }];
}

export function hitTree(position) {
    return tree.some(segment => {
        return equalPositions(segment, position)
    });
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function generateTree() {
    tree.forEach((item) => {
        const treeChance = Math.floor(Math.random() * 50);
        if (treeChance == 7) {
            tree.push({
                x: Math.floor(Math.random() * 21) + 1,
                y: Math.floor(Math.random() * 21) + 1,
                id: getSeason()
            });
        }
        console.log(`Id: ${item.id}`)
    });
}