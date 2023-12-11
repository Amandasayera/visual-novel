


function displayDrawing(index) {
  // Get the main image element
  var mainImage = document.getElementById("mainImage");

  // Get the thumbnail image element based on the index
  var thumbnailImage = document.querySelector(".thumbnails img:nth-child(" + index + ")");

  // Get the source and alt attributes from the clicked thumbnail
  var src = thumbnailImage.getAttribute("src");
  var alt = thumbnailImage.getAttribute("alt");

  // Update the main image with the clicked thumbnail's source and alt attributes
  mainImage.setAttribute("src", src);
  mainImage.setAttribute("alt", alt);

  // Show the main image
  mainImage.style.display = "block";
}

// Make the page fullscreen
document.documentElement.requestFullscreen().catch(function (error) {
  console.log('Failed to enable fullscreen mode:', error);
});






document.addEventListener('DOMContentLoaded', function() {
  const passcodeInput = document.getElementById('passcodeInput');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function() {
    const passcode = 'pigeon';

    if (passcodeInput.value === passcode) {
      window.location.href = 'pigeonbird.html';
    } else {
      alert('Incorrect passcode. Please try again.');
    }
  });

  passcodeInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      submitButton.click();
    }
  });
});
