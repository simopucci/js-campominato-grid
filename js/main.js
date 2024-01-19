// # FUNCTIONS
// funzione per generare le bombe
function generateBombList(bombs, numberOfCell) {
    let randomBombs = [];
    
    while (randomBombs.length < bombs) {
        let number = Math.floor(Math.random() * numberOfCell + 1);
    
        if (!randomBombs.includes(number)) {
            randomBombs.push(number);
        }
    }
    console.log(randomBombs);
    return randomBombs;
}


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
        
        if(!isGameOver) {
            
            if (!genBombs100.includes(text)) {
                box.classList.toggle('clicked');
                console.log(box.innerText);
                points += 1;
                if (points == 100 - 16) {
                    console.log('Hai Vinto!');
                    isGameOver = true;
                }
            } else {
                box.classList.toggle('failed');
                console.log('Game Over');
                isGameOver = true;
                console.log('Il tuo punteggio è: ' + points);
            }
        }

    })

    return box;
}

// # Normale
function gameGrid81(container) {
    container.innerHTML = '';

    for (let i = 1; i <= 81; i++) {
        const boxElement = gameBox81(i);
        container.append(boxElement);
    }
}

function gameBox81(text) {
    const box = document.createElement('div');
    box.classList.add('box-81');
    box.innerText = text;

    box.addEventListener('click', function() {
        if(!isGameOver) {
            
            if (!genBombs81.includes(text)) {
                box.classList.toggle('clicked');
                console.log(box.innerText);
                points += 1;
                if (points == 81 - 16) {
                    console.log('Hai Vinto!');
                    isGameOver = true;
                }
            } else {
                box.classList.toggle('failed');
                console.log('Game Over');
                isGameOver = true;
                console.log('Il tuo punteggio è: ' + points);
            }

        }
    })

    return box;
}

// # Difficile
function gameGrid49(container) {
    container.innerHTML = '';

    for (let i = 1; i <= 49; i++) {
        const boxElement = gameBox49(i);
        container.append(boxElement);
    }
}

function gameBox49(text) {
    const box = document.createElement('div');
    box.classList.add('box-49');
    box.innerText = text;

    box.addEventListener('click', function() {
        if(!isGameOver) {
            
            if (!genBombs49.includes(text)) {
                box.classList.toggle('clicked');
                console.log(box.innerText);
                points += 1;
                if (points == 49 - 16) {
                    console.log('Hai Vinto!');
                    isGameOver = true;
                }
            } else {
                box.classList.toggle('failed');
                console.log('Game Over');
                isGameOver = true;
                console.log('Il tuo punteggio è: ' + points);
            }

        }
    })

    return box;
}

// # END FUNCTIONS

const gameBoard = document.getElementById('gameboard');
const playButton = document.getElementById('play-button');
const difficultValue = document.getElementById('difficult')
gameGrid49(gameBoard);
gameGrid81(gameBoard);
gameGrid(gameBoard);
const genBombs49 = generateBombList(16, 49);
const genBombs81 = generateBombList(16, 81);
const genBombs100 = generateBombList(16, 100);
let isGameOver = false;
let points = 0;

playButton.addEventListener('click', function() {
    isGameOver = false;
    points = 0;

    if (difficultValue.value == 'facile') {
        gameGrid(gameBoard);
    } else if (difficultValue.value == 'normale') {
        gameGrid81(gameBoard);
    } else if (difficultValue.value == 'difficile') {
        gameGrid49(gameBoard);
    }
})