const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    filter: ['grayscale(100%)', 'grayscale(0%)'],
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  
  items[i].animate(keyframes, options);
}
