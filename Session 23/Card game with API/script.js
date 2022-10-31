let deckId = '';

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        deckId = data.deck_id;
        console.log(deckId);
    })
    .catch(err => {
        console.log(`error ${err}`);
    })


document.querySelector("button").addEventListener("click", drawCards)

function drawCards() {
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector("#player1").src = data.cards[0].image;
            document.querySelector("#player2").src = data.cards[1].image;

            let player1Val = convertToNum(data.cards[0].value);
            let player2Val = convertToNum(data.cards[1].value);

            if (player1Val > player2Val) {
                document.querySelector("h3").innerText = "Player 1 wins";
            } else if (player1Val < player2Val) {
                document.querySelector("h3").innerText = "Player 2 wins";
            } else {
                document.querySelector("h3").innerText = "There is a tie";
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        })
}

function convertToNum(value) {
    if (value === 'ACE') {
        return value = 14;
    } else {
        return Number(val);
    }

}