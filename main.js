// Manejar el cambio de color del navbar al hacer scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inicializar AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        serviceBoxes.forEach(box => {
            if (isInViewport(box)) {
                box.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
});
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1abc9c"  // Color de las partículas
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.6,  // Opacidad de las partículas
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,  // Activar las líneas conectadas
            "distance": 150,  // Distancia para mostrar líneas
            "color": "#1abc9c",  // Color de las líneas
            "opacity": 0.5,  // Opacidad de las líneas
            "width": 1  // Ancho de las líneas
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');
        
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor, completa todos los campos.');
                event.preventDefault();
            } else if (!validateEmail(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                event.preventDefault();
            }
        });
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        particlesJS('particles-background', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#1abc9c'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    });
    
    document.getElementById('service').addEventListener('change', function() {
        var otherService = document.getElementById('other-service');
        if (this.value === 'Otros') {
            otherService.style.display = 'block';
        } else {
            otherService.style.display = 'none';
        }
    });s
    document.addEventListener('DOMContentLoaded', function () {
        var btnScrollTop = document.getElementById('btnScrollTop');
    
        // Mostrar el botón cuando el usuario se desplaza hacia abajo
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) { // Ajusta el valor según cuándo quieras que aparezca el botón
                btnScrollTop.classList.add('show');
            } else {
                btnScrollTop.classList.remove('show');
            }
        });
    });
    
    // Función para desplazar hacia arriba
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }





