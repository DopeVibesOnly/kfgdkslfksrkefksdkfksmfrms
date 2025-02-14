document.addEventListener('DOMContentLoaded', () => {
  // Create floating hearts background
  const container = document.querySelector('.floating-hearts-container');
  const heartTemplate = container.querySelector('.floating-heart');
  
  for (let i = 0; i < 20; i++) {
    const heart = heartTemplate.cloneNode(true);
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    heart.style.opacity = `${Math.random() * 0.3}`;
    container.appendChild(heart);
  }
  
  // Remove the template heart
  heartTemplate.remove();
  
  // Add hover effect to reasons
  const reasons = document.querySelectorAll('.reason');
  reasons.forEach(reason => {
    reason.addEventListener('mouseenter', () => {
      const heart = reason.querySelector('.reason-number');
      heart.style.transform = 'scale(1.2) rotate(10deg)';
      setTimeout(() => {
        heart.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    });
  });
});