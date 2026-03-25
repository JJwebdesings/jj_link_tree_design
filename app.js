const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (window.tsParticles) {
    tsParticles.load({
        id: 'particles-bg',
        options: {
            fullScreen: {
                enable: false
            },
            background: {
                color: {
                    value: 'transparent'
                }
            },
            detectRetina: true,
            fpsLimit: 60,
            particles: {
                number: {
                    value: reduceMotion ? 24 : 62,
                    density: {
                        enable: true,
                        area: 900
                    }
                },
                color: {
                    value: ['#1d2b3a', '#b8925a', '#ffffff']
                },
                shape: {
                    type: ['circle']
                },
                opacity: {
                    value: { min: 0.1, max: 0.38 },
                    animation: {
                        enable: !reduceMotion,
                        speed: 0.55,
                        sync: false
                    }
                },
                size: {
                    value: { min: 1, max: 4.2 },
                    animation: {
                        enable: !reduceMotion,
                        speed: 1.2,
                        sync: false
                    }
                },
                move: {
                    enable: true,
                    speed: reduceMotion ? 0.1 : 1.45,
                    direction: 'none',
                    random: true,
                    straight: false,
                    outModes: {
                        default: 'out'
                    }
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: '#b8925a',
                    opacity: 0.18,
                    width: 1
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: !reduceMotion,
                        mode: 'bubble'
                    },
                    onClick: {
                        enable: !reduceMotion,
                        mode: 'push'
                    }
                },
                modes: {
                    bubble: {
                        distance: 140,
                        duration: 1.6,
                        opacity: 0.45,
                        size: 5
                    },
                    push: {
                        quantity: 4
                    }
                }
            }
        }
    });
}

if (!reduceMotion) {
    const card = document.querySelector('.profile-card');
    const bgJj = document.querySelector('.bg-jj');

    const handleTilt = (event) => {
        if (!card) {
            return;
        }

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 6.4;
        const rotateX = (0.5 - (y / rect.height)) * 5.2;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = () => {
        if (card) {
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        }
    };

    if (card) {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    }

    const handleBackgroundParallax = (event) => {
        if (!bgJj) {
            return;
        }

        const xRatio = (event.clientX / window.innerWidth) - 0.5;
        const yRatio = (event.clientY / window.innerHeight) - 0.5;

        const moveX = xRatio * 10;
        const moveY = yRatio * 8;

        bgJj.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    window.addEventListener('mousemove', handleBackgroundParallax);
}
