let squares = document.querySelectorAll('.square');
let spanElements = document.querySelectorAll('span');
let scoreElement = spanElements[0];
let timeElement = spanElements[1];
let score = 0, time = 60;
let hitPosition;

function showMole() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition;
}

let moveMole = setInterval(showMole, 800);

squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (square === hitPosition) {
            score++; scoreElement.innerText = score;
        }
    })
})

let timer = setInterval(countDown, 1000);

function countDown() {
    if (time === 0) {
        clearInterval(timer);
        alert(`Game Over! You scored ${score}.`);
        location.reload();
    } else {
        time--;
        timeElement.innerText = time;
    }
}