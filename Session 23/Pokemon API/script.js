document.querySelector("button").addEventListener("click", () => {
    const pokemonId = document.querySelector("input").value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector("h2").innerText = data.name;
        })
        .catch(err => {
            console.log(`error ${err}`);
        })
})

