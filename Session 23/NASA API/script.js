document.querySelector("button").addEventListener("click", () => {
    const date = document.querySelector("input").value;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=hd2DtQ8R8Vfm5fvYNr9xkMKLxCHMRuh7llQoyXek&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.media_type === 'image') {
                document.querySelector("img").src = data.hdurl;
                document.querySelector("iframe").src = '';
            } else if (data.media_type === 'video') {
                document.querySelector("iframe").src = data.url;
                document.querySelector("img").src = '';
            }

            document.querySelector("h3").innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`);
        })
})

