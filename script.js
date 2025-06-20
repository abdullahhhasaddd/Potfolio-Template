document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const themeSwitch = document.getElementById('themeSwitch');
    const icon = themeSwitch.querySelector('i');
    let isLight = false;

    // Light theme colors
    const lightTheme = {
        '--primary-color': '#fa9c05',
        '--dark-bg': '#ffffff',
        '--dark-card': '#f5f5f5',
        '--dark-hover': '#e5e5e5',
        '--text-light': '#333333',
        '--text-gray': '#666666',
        '--placeholder-color': '#666666',
        '--input-bg': 'rgba(0, 0, 0, 0.05)',
        '--nav-bg': '#ffffff',
        '--nav-text': '#333333',
        '--nav-hover': '#f0f0f0',
        '--nav-border': 'rgba(250, 156, 5, 0.2)',
        '--card-text': '#333333',
        '--card-shadow': 'rgba(0, 0, 0, 0.1)',
        '--card-border': 'rgba(250, 156, 5, 0.3)',
        '--heading-gradient-1': '#fa9c05',
        '--heading-gradient-2': '#cc7d00',
        '--review-name': '#333333',
        '--card-hover-shadow': 'rgba(250, 156, 5, 0.2)',
        '--icon-shadow': 'rgba(250, 156, 5, 0.2)',
        '--button-text': '#ffffff'
    };

    // Dark theme colors
    const darkTheme = {
        '--primary-color': '#fa9c05',
        '--dark-bg': '#121212',
        '--dark-card': '#1a1a1a',
        '--dark-hover': '#2a2a2a',
        '--text-light': '#ffffff',
        '--text-gray': '#a0a0a0',
        '--placeholder-color': '#a0a0a0',
        '--input-bg': 'rgba(255, 255, 255, 0.05)',
        '--nav-bg': '#1a1a1a',
        '--nav-text': '#ffffff',
        '--nav-hover': '#2a2a2a',
        '--nav-border': 'rgba(250, 156, 5, 0.1)',
        '--card-text': '#ffffff',
        '--card-shadow': 'rgba(0, 0, 0, 0.3)',
        '--card-border': 'rgba(250, 156, 5, 0.1)',
        '--heading-gradient-1': '#fa9c05',
        '--heading-gradient-2': '#cc7d00',
        '--review-name': '#ffffff',
        '--card-hover-shadow': 'rgba(0, 0, 0, 0.4)',
        '--icon-shadow': 'rgba(250, 156, 5, 0.3)',
        '--button-text': '#ffffff'
    };

    // Function to switch sections
    function switchSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Theme switcher functionality
    themeSwitch.addEventListener('click', () => {
        isLight = !isLight;
        const theme = isLight ? lightTheme : darkTheme;
        
        // Update icon
        icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
        
        // Apply theme
        Object.entries(theme).forEach(([property, value]) => {
            document.documentElement.style.setProperty(property, value);
        });
    });

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            switchSection(sectionId);
        });
    });

    // Handle initial state
    switchSection('home');

    // Typing Animation
    const services = [
        "Web Developer",
        "UI/UX Designer",
        "Full Stack Developer",
        "Problem Solver"
    ];

    let currentService = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseTime = 2000;

    function typeWriter() {
        const typingText = document.querySelector('.typing-text');
        const currentText = services[currentService];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
            typingSpeed = deletingSpeed;
        } else {
            typingText.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
            typingSpeed = 100;
        }

        if (!isDeleting && currentChar === currentText.length) {
            isDeleting = true;
            typingSpeed = pauseTime;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentService = (currentService + 1) % services.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start typing animation when page loads
    setTimeout(typeWriter, 1000);
}); 