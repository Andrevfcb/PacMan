document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.querySelector('.game-area')
    const scoreDisplay = document.querySelector('.score span')
    let score = 0
    const width = 28
    const layout = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,0,1,1,4,1,1,0,1,1,0,1,1,4,1,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
4,4,4,4,4,4,0,1,1,4,4,2,2,2,2,2,2,4,4,1,1,0,4,4,4,4,4,4,
1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];
    const squares = []

// 0 - pac-dot
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

function createBoard() {
    for (let i=0; i <layout.length; i++){
        const square = document.createElement('div');
        gameArea.appendChild(square);
        squares.push(square);

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
        }
    }}

createBoard()

 let currentIndexPacman = 490
 
 squares[currentIndexPacman].classList.add('pac-man')

function movePacman(e) {
    squares[currentIndexPacman].classList.remove('pac-man')
    console.log(e.keyCode);
    
    switch (e.keyCode) {
        case 37:
            if (currentIndexPacman % width !== 0 && !squares[currentIndexPacman - 1].classList.contains('wall') && !squares[currentIndexPacman - 1].classList.contains('ghost-lair')) {currentIndexPacman -= 1}
            break;
        case 38:
            if (currentIndexPacman - width >= 0 && !squares[currentIndexPacman - width].classList.contains('wall') && !squares[currentIndexPacman - width].classList.contains('ghost-lair')) {currentIndexPacman -= width}
            break;
        case 39:
            if (currentIndexPacman % width < width -1 && !squares[currentIndexPacman + 1].classList.contains('wall') && !squares[currentIndexPacman + 1].classList.contains('ghost-lair')) {currentIndexPacman += 1}
            break;
        case 40:
            if (currentIndexPacman + width < width * width && !squares[currentIndexPacman + width].classList.contains('wall')&& !squares[currentIndexPacman + width].classList.contains('ghost-lair')) {currentIndexPacman += width}
            break;
    }

    squares[currentIndexPacman].classList.add('pac-man')

    dotEaten()
    powerPelletEaten()
    gameOver()
    win()
}

document.addEventListener('keyup', movePacman)

function dotEaten() {
    if(squares[currentIndexPacman].classList.contains('pac-dot')){
        squares[currentIndexPacman].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML = ` ${score}`
    }
}

function powerPelletEaten() {
    if(squares[currentIndexPacman].classList.contains('power-pellet')) {
        ghosts.forEach(ghost => ghost.isScared = true)
        score += 10
        scoreDisplay.innerHTML = ` ${score}`
        setTimeout(unScaredGhosts, 10000)
        squares[currentIndexPacman].classList.remove('power-pellet')
    }
}

function unScaredGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor (className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerID = NaN
        this.isScared = false
    }
}

ghosts = [
    new Ghost ('blinky', 348, 150),
    new Ghost ('pinky', 376, 200),
    new Ghost ('inky', 351, 150),
    new Ghost ('clyde', 379, 250)
]

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerID = setInterval(function(){
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        if (ghost.isScared) {squares[ghost.currentIndex].classList.add('scared-ghost')}

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }

        gameOver()
    }, ghost.speed)
}

function gameOver() {
    if (!squares[currentIndexPacman].classList.contains('scared-ghost') && squares[currentIndexPacman].classList.contains('ghost')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerID))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function() {alert('Game Over!')}, 500)
        }
}

function win() {
    if (score === 270) {
        ghosts.forEach(ghost => clearInterval(ghost.timerID))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function() {alert('YOU WON!')}, 500)
        }
}
})


