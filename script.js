function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Scroll animation
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        const animatedElements = entry.target.querySelectorAll('[class*="animate-"]');
        animatedElements.forEach(el => {
          el.style.animationPlayState = 'running';
        });
      } else {
        entry.target.classList.remove('is-visible');
        const animatedElements = entry.target.querySelectorAll('[class*="animate-"]');
        animatedElements.forEach(el => {
          el.style.animationPlayState = 'paused';
        });
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
}

// Parallax effect for profile picture
function parallaxEffect() {
  const profilePic = document.querySelector('#profile .section__pic-container');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    profilePic.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  });
}

// Typing effect for the title
function typingEffect() {
  const title = document.querySelector('#profile .title');
  const text = title.textContent;
  title.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  
  setTimeout(type, 1000);
}

// Call the functions when the page loads
window.addEventListener('load', () => {
  animateOnScroll();
  parallaxEffect();
  typingEffect();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});