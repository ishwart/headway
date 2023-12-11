document.addEventListener('DOMContentLoaded', function () {
    const navigationContainer = document.getElementById('navigationContainer');
    const barsIcon = document.getElementById('bars');
  
    if (barsIcon) { // Check if barsIcon is not null
      function toggleMenu() {
        const currentWidth = parseInt(getComputedStyle(navigationContainer).width, 10);
        navigationContainer.style.width = currentWidth === 0 ? '60%' : '0';
      }
  
      document.addEventListener('click', function (event) {
        const isClickInside = navigationContainer.contains(event.target) || barsIcon.contains(event.target);
        if (!isClickInside) {
          navigationContainer.style.width = '0';
        }
      });
  
      barsIcon.addEventListener('click', toggleMenu);
    }
  });
  