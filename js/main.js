// # FUNCTIONS

// # Facile
function gameGrid(container) {
    container.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const boxElement = gameBox(i);
        container.append(boxElement);
    }
}

function gameBox(text) {
    const box = document.createElement('div');
    box.classList.add('box-100');
    box.innerText = text;

    box.addEventListener('click', function() {
        box.classList.toggle('clicked');
        console.log(box.innerText);
    })

    return box;
}

// # END FUNCTIONS

const gameBoard = document.getElementById('gameboard');
const playButton = document.getElementById('play-button');

gameGrid(gameBoard);

playButton.addEventListener('click', function() {
    gameGrid(gameBoard);
})