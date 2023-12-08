function activateLink(link) {
    var links = document.querySelectorAll('.dash-nav-items a');
    links.forEach(function (item) {
        item.classList.remove('active');
    });
    link.classList.add('active');

    var paths = document.querySelectorAll('.dash-nav-items a svg path');
    paths.forEach(function (path) {
        path.style.stroke = '';
    });

    var activePath = link.querySelector('svg path');
    activePath.style.stroke = '#004E92';
}


document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.dash-nav-items a');
    activateLink(links[0]);

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // event.preventDefault();
            activateLink(link);
        });
    });
});
