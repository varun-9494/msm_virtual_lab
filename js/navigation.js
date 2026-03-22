// MOBILE MENU TOGGLE
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// TOGGLE UNITS (Open/Close experiment lists)
function toggleUnit(unitId) {
    const unitContent = document.getElementById(unitId);
    const unitToggle = document.getElementById(unitId + '-toggle');
    
    // Toggle the 'active' class
    unitContent.classList.toggle('active');
    unitToggle.classList.toggle('rotated');
}

// SMOOTH SCROLLING for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

console.log('Virtual Lab - Navigation Ready!');
