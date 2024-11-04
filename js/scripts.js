// Star Field Effect
document.addEventListener("DOMContentLoaded", () => {
    const starField = document.querySelector('.star-field');
    
    // Function to create stars
    function createStars() {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starField.appendChild(star);
      }
    }
    
    // Function to create a shooting star
    function createShootingStar() {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      shootingStar.style.top = `${Math.random() * 50}vh`;
      shootingStar.style.left = `${Math.random() * 100}vw`;
      starField.appendChild(shootingStar);
  
      // Remove the shooting star after animation completes
      setTimeout(() => {
        shootingStar.remove();
      }, 1500); // Same duration as the animation
    }
  
    // Initialize stars
    createStars();
  
    // Generate shooting stars at intervals
    setInterval(createShootingStar, 2000); // Every 2 seconds
  });
  