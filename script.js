// Your code here.
document.addEventListener('DOMContentLoaded', () => {
  const itemsContainer = document.querySelector('.items');
  
  let isDragging = false;
  let startX, scrollLeft;

  // When mouse is pressed down
  itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
    itemsContainer.classList.add('active');
  });

  // When mouse is released
  itemsContainer.addEventListener('mouseup', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
  });

  // When mouse is moved
  itemsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Stop the function if not dragging
    e.preventDefault();
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 3; // Scroll-fast multiplier
    itemsContainer.scrollLeft = scrollLeft - walk;
  });

  // Optional: Handle touch events for mobile devices
  itemsContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
    itemsContainer.classList.add('active');
  });

  itemsContainer.addEventListener('touchend', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
  });

  itemsContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 3;
    itemsContainer.scrollLeft = scrollLeft - walk;
  });
});

