// NAVIGATION-FOR-MOBILE

document.addEventListener('DOMContentLoaded', function () {
    const navigationContainer = document.getElementById('navigationContainer');
    const barsIcon = document.getElementById('bars');
  
    // Check if barsIcon is not null and if the screen width is less than or equal to 600 pixels
    if (barsIcon && navigationContainer && window.innerWidth <= 600) {
        function toggleMenu() {
            const currentWidth = parseInt(getComputedStyle(navigationContainer).width, 10);
            const newWidth = currentWidth === 0 ? '60%' : '0';
            const newOpacity = currentWidth === 0 ? '1' : '0';
  
            navigationContainer.style.width = newWidth;
            navigationContainer.style.opacity = newOpacity;
        }
  
        // Toggle the menu when the bars icon is clicked
        barsIcon.addEventListener('click', function (event) {
            // Prevent the click event from propagating to the document click event
            event.stopPropagation();
            toggleMenu();
        });
  
        // Close the menu if a click occurs outside the navigation container and bars icon
        document.addEventListener('click', function (event) {
            const isClickInside = navigationContainer.contains(event.target) || barsIcon.contains(event.target);
            if (!isClickInside) {
                navigationContainer.style.width = '0';
                navigationContainer.style.opacity = '0';
            }
        });
    }
  });
  