document.addEventListener("DOMContentLoaded", function () {
    const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");

    const is30MinutesSinceLastVisit = !lastVisitTimestamp || (Date.now() - lastVisitTimestamp > 30 * 60 * 1000);

    if (is30MinutesSinceLastVisit) {
        showLoadingPage();

        setTimeout(function () {
            hideLoadingPage();
            localStorage.setItem("lastVisitTimestamp", Date.now());
        }, 1000);
    } else {
        hideLoadingPage();
    }
});

function showLoadingPage() {
    document.body.classList.add("content-loaded");
    document.getElementById("loadingPage").style.backgroundColor = 'transpe'; // Replace 'transpe' with the actual color or style

    const loadingLogo = document.querySelector(".loading-logo");
    loadingLogo.classList.add("jelly-animation"); // Add the class to enable the animation
}

function hideLoadingPage() {
    const loadingPage = document.getElementById("loadingPage");
    loadingPage.style.display = "none";
}
