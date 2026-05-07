// Animation au scroll des éléments
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les éléments
document.querySelectorAll('.feat, .btn, .sub p, .highlight').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Animation des particules (fond)
function createParticles() {
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 6 + 3 + 'px';
    particle.style.height = particle.style.width;
    particle.style.borderRadius = '50%';
    particle.style.background = `rgba(17, 17, 17, ${Math.random() * 0.2 + 0.08})`;
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.animation = `float ${Math.random() * 15 + 20}s infinite`;
    particle.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(17, 17, 17, 0.3)`;
    document.body.appendChild(particle);
  }
}

// Animation de flottement
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(-40px) translateX(-10px); }
    75% { transform: translateY(-20px) translateX(15px); }
  }
  
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(17, 17, 17, 0.7); }
    50% { box-shadow: 0 0 0 10px rgba(17, 17, 17, 0); }
  }
  
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
`;
document.head.appendChild(style);

// Effet hover au survol des cartes
document.querySelectorAll('.feat').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animation du badge au hover
document.addEventListener('DOMContentLoaded', function() {
  // Créer les particules
  createParticles();
  
  // Badge hover animation
  const badge = document.querySelector('.badge');
  if (badge) {
    badge.addEventListener('mouseenter', function() {
      this.classList.add('animate');
    });
    
    badge.addEventListener('mouseleave', function() {
      this.classList.remove('animate');
    });
  }
});

// Compteur de chargement
window.addEventListener('load', function() {
  console.log('🚀 Site Hermès ENT chargé avec animations !');
});

// Parallax léger au scroll
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.scrollY;
  if (hero) {
    hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});

// Animation au click des boutons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'expand 0.6s ease-out';
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes expand {
        to {
          width: 300px;
          height: 300px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left - 10) + 'px';
    ripple.style.top = (e.clientY - rect.top - 10) + 'px';
    ripple.style.display = 'none'; // Les boutons ont déjà un ripple en CSS
  });
});
