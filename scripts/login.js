document.addEventListener("DOMContentLoaded", function () {
    var hidebutton = document.getElementById("hidebutton");
    var studentcontainer = document.getElementById("studentcontainer");
    var logincontainer = document.getElementById("logincontainer");

    hidebutton.addEventListener("click", function () {
        studentcontainer.style.display = "flex";
        logincontainer.style.display = "none";
    });
});
