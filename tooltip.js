document.addEventListener('DOMContentLoaded', () => {
  const tooltipContainer = document.querySelector('.ocean');
  const tooltip = tooltipContainer.querySelector('.tooltip');
  const audioPlayer = tooltipContainer.querySelector('.audio-player');

  tooltipContainer.addEventListener('mouseover', () => {
    tooltipContainer.style.cursor = 'pointer';
    audioPlayer.play();
  });

  tooltipContainer.addEventListener('mouseleave', () => {
    tooltipContainer.style.cursor = 'default';
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  });

  tooltipContainer.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
