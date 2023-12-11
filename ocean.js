const oceanContainer = document.getElementById('ocean-container');
oceanContainer.addEventListener('scroll', function() {
  const scrollTop = oceanContainer.scrollTop;
  const maxScroll = oceanContainer.scrollHeight - oceanContainer.clientHeight;

  // Reverse the calculation of opacity
  const opacity = 1 - (1 - scrollTop / maxScroll);

  const images = document.querySelectorAll('#ocean-container img');

  images.forEach(function(image) {
    image.style.filter = `brightness(${opacity})`;
  });
});
