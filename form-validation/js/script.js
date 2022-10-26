document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const confirmPwd = document.querySelector("#confirm-password").value;

    if (username === '') {
        alert("Username cannot be empty")
        return false;
    } else if (password === '') {
        alert("Password cannot be empty");
        return false;
    } else if (confirmPwd === '') {
        alert("Confirm password cannot be empty");
        return false;
    } else if (password.length < 8) {
        alert("Password must have at least 8 characters");
        return false;
    } else if (password !== confirmPwd) {
        alert("Password and Confirm password don't match");
        return false;
    } else {
        window.location.replace("message.html");
        return true;
    }


})