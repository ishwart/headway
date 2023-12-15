// popup-button

document.addEventListener('DOMContentLoaded', function() {
    var candidateButton = document.getElementsByClassName('submit');
    var popupContainer = document.getElementsByClassName('popup-container');
    var cancelButton = document.getElementById('popup-button').querySelector('button:nth-child(1)');
    var finishButton = document.getElementById('popup-button').querySelector('button:nth-child(2)');
  
    candidateButton.addEventListener('click', function() {
      popupContainer.classList.add('show-popup');
    });
  
    cancelButton.addEventListener('click', function() {
      popupContainer.classList.remove('show-popup');
    });
  
    finishButton.addEventListener('click', function() {
      alert('Finish button clicked');
      popupContainer.classList.remove('show-popup');
    });
  });