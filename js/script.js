// ==================== TRANSLATIONS ====================
const translations = {
  id: {
    navHome: "Home",
    navAbout: "Tentang Saya",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navContact: "Kontak",
    heroTitle: "Selamat Datang di Galaksi Saya",
    heroDesc: "Jelajahi kemungkinan tak terbatas dari alam semesta",
    aboutTitle: "Tentang Saya",
    aboutName: "Muhammad Ridwan",
    aboutDesc1: "Saya adalah seorang web developer yang passionate dalam menciptakan pengalaman digital yang menakjubkan. Dengan pengalaman dalam berbagai teknologi modern, saya selalu berusaha untuk memberikan solusi terbaik.",
    aboutDesc2: "Saya percaya bahwa desain yang baik dan kode yang berkualitas adalah kunci untuk menciptakan produk yang luar biasa.",
    skillsTitle: "Keahlian",
    skill1Title: "Frontend Development",
    skill1Desc: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS",
    skill2Title: "Backend Development",
    skill2Desc: "Node.js, PHP, Python, MySQL, MongoDB",
    skill3Title: "Design & Tools",
    skill3Desc: "Figma, Adobe XD, Git, VS Code, Photoshop",
    projectsTitle: "Proyek Saya",
    project1Title: "Website E-Commerce",
    project1Desc: "Platform belanja online dengan fitur lengkap dan UI modern",
    project2Title: "Dashboard Analytics",
    project2Desc: "Dashboard admin dengan visualisasi data yang powerful",
    project3Title: "Mobile App Design",
    project3Desc: "Desain aplikasi mobile dengan user experience terbaik",
    btnView: "Lihat Detail",
    contactTitle: "Hubungi Saya",
    contactDesc: "Mari berkolaborasi dan ciptakan sesuatu yang luar biasa!"
  },
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroTitle: "Welcome to My Galaxy",
    heroDesc: "Explore the infinite possibilities of the universe",
    aboutTitle: "About Me",
    aboutName: "Muhammad Ridwan",
    aboutDesc1: "I am a passionate web developer who loves creating amazing digital experiences. With experience in various modern technologies, I always strive to provide the best solutions.",
    aboutDesc2: "I believe that good design and quality code are the keys to creating extraordinary products.",
    skillsTitle: "Skills",
    skill1Title: "Frontend Development",
    skill1Desc: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS",
    skill2Title: "Backend Development",
    skill2Desc: "Node.js, PHP, Python, MySQL, MongoDB",
    skill3Title: "Design & Tools",
    skill3Desc: "Figma, Adobe XD, Git, VS Code, Photoshop",
    projectsTitle: "My Projects",
    project1Title: "E-Commerce Website",
    project1Desc: "Online shopping platform with complete features and modern UI",
    project2Title: "Analytics Dashboard",
    project2Desc: "Admin dashboard with powerful data visualization",
    project3Title: "Mobile App Design",
    project3Desc: "Mobile app design with the best user experience",
    btnView: "View Details",
    contactTitle: "Contact Me",
    contactDesc: "Let's collaborate and create something amazing!"
  }
};

// Current language (default: Indonesian)
let currentLang = 'id';

// ==================== LANGUAGE TOGGLE ====================
function changeLanguage(lang) {
  currentLang = lang;
  
  // Update all elements with data-key attribute
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update language icons
  const langIcon = document.getElementById('langIcon');
  const langIconMobile = document.getElementById('langIconMobile');
  
  if (lang === 'id') {
    if (langIcon) langIcon.textContent = 'EN';
    if (langIconMobile) langIconMobile.textContent = 'EN';
  } else {
    if (langIcon) langIcon.textContent = '🇮🇩';
    if (langIconMobile) langIconMobile.textContent = '🇮🇩';
  }
}

// Language toggle button events
const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'id' ? 'en' : 'id';
    changeLanguage(newLang);
  });
}

if (langToggleMobile) {
  langToggleMobile.addEventListener('click', () => {
    const newLang = currentLang === 'id' ? 'en' : 'id';
    changeLanguage(newLang);
  });
}

// ==================== CREATE FLOATING PARTICLES ====================
function createParticles() {
  const bg = document.getElementById('animatedBg');
  if (!bg) return;
  
  const particleCount = 40;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size for particles
    const size = Math.random() * 80 + 30;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
    
    bg.appendChild(particle);
  }
}

// Create particles when page loads
createParticles();

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Close offcanvas menu after clicking (for mobile)
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      if (offcanvasElement) {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
          offcanvas.hide();
        }
      }
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add extra blur and shadow when scrolling
  if (currentScroll > 50) {
    navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    navbar.style.boxShadow = '0 4px 30px rgba(138, 43, 226, 0.5)';
  } else {
    navbar.style.background = 'rgba(10, 14, 39, 0.9)';
    navbar.style.boxShadow = '0 2px 20px rgba(138, 43, 226, 0.3)';
  }
  
  lastScroll = currentScroll;
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ==================== ADD PARALLAX EFFECT TO PLANETS ====================
const planets = document.querySelectorAll('.planet');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  planets.forEach((planet, index) => {
    const speed = 0.5 + (index * 0.2);
    const yPos = -(scrollY * speed);
    planet.style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.1}deg)`;
  });
});

// ==================== ADD MOUSE PARALLAX EFFECT ====================
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  
  const nebulas = document.querySelectorAll('.nebula');
  nebulas.forEach((nebula, index) => {
    const speed = 0.5 + (index * 0.3);
    nebula.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
  });
});

// ==================== CONSOLE LOG ====================
console.log('🌌 Galaxy theme loaded successfully!');
console.log('✨ Enjoy exploring the universe!');