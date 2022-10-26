let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".h-score").textContent = highScore;


document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🙌 Correct!";

        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".wrapper").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "25rem";
        document.querySelector(".again").style.display = "block";
        document.querySelector(".check").style.display = "none";


        if (score > highScore) {
            document.querySelector(".h-score").textContent = score;
        }
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "👇 Too low!";
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "👆 Too high!";
        score--;
        document.querySelector(".score").textContent = score;
    }
})

document.querySelector(".again").addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;


    document.querySelector('.wrapper').style.backgroundColor = "rgba(85, 85, 85, 0.5)";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.message').textContent = "Guess here ↙";
    document.querySelector('.again').style.display = "none";
    document.querySelector('.check').style.display = "block";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})