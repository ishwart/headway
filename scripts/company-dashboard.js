document.addEventListener('DOMContentLoaded', function () {
    const navigationContainer = document.getElementById('navigationContainer');
    const barsIcon = document.getElementById('bars');
  
    if (barsIcon) { // Check if barsIcon is not null
      function toggleMenu() {
        const currentWidth = parseInt(getComputedStyle(navigationContainer).width, 10);
        const newWidth = currentWidth === 0 ? '60%' : '0';
        const newOpacity = currentWidth === 0 ? '1' : '0';
        
        navigationContainer.style.width = newWidth;
        navigationContainer.style.opacity = newOpacity;
      }
  
      document.addEventListener('click', function (event) {
        const isClickInside = navigationContainer.contains(event.target) || barsIcon.contains(event.target);
        if (!isClickInside) {
          navigationContainer.style.width = '0';
          navigationContainer.style.opacity = '0';
        }
      });
  
      barsIcon.addEventListener('click', toggleMenu);
    }
  });
  