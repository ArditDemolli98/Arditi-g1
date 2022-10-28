document.querySelector("button").addEventListener("click", function () {
    const newHeading = document.createElement("h2");

    console.log(newHeading);

    const newContent = document.createTextNode("Hello from JavaScript");

    newHeading.appendChild(newContent);

    document.body.appendChild(newHeading);
})
const newHeading = document.createElement("h2");

console.log(newHeading);

const newContent = document.createTextNode("Hello from JavaScript");

newHeading.appendChild(newContent);

document.body.appendChild(newHeading);


