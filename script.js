document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carSection = document.querySelector('.car');
    const carMap = document.getElementById('carMap');
        
    let currentIndex = 0;
    let slideInterval = null;

    function updateCarousel(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        if (container) {
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        const carMap = document.getElementById('carMap');
        const imageCredit = document.getElementById('imageCredit');

        if (carMap && imageCredit) {
            if (currentIndex === 1) {
                carMap.style.backgroundImage = "url('background2.jpg')";
                imageCredit.innerText = "Credit: EvgeniyShkolenko | Getty Photos";
            } else {
                carMap.style.backgroundImage = "url('background.jpg')";
                imageCredit.innerText = "Credit: NASA/Goddard Space Flight Center (GSFC)";
        }
    }
}

    //every 5 seconds
    function startSlideShow() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            updateCarousel(currentIndex + 1);
        }, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
        slideInterval = null;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateCarousel(currentIndex + 1);
            startSlideShow();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateCarousel(currentIndex - 1);
            startSlideShow();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateCarousel(i);
            startSlideShow();
        });
    });

    //pause auto-play on hover, resume on mouse leave
    if (carSection) {
        carSection.addEventListener('mouseenter', stopSlideShow);
        carSection.addEventListener('mouseleave', startSlideShow);
    }

    startSlideShow();

    //background following the mouse
    if (carSection && carMap) {
        carSection.addEventListener('mousemove', (e) => {
            const rect = carSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const moveX = x * 20; 
            const moveY = y * 20;
            carMap.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });

        carSection.addEventListener('mouseleave', () => {
            carMap.style.transform = `translate(0px, 0px) scale(1)`;
        });
    }
});

    // fingers crossed the letter works
    const openLetterBtn = document.getElementById('openLetterBtn');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const letterSeal = document.getElementById('letterSeal');
    const letterPopup = document.getElementById('letterPopup');

    if (openLetterBtn && letterPopup && letterSeal) {
        openLetterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            letterSeal.style.display = 'none';
            letterPopup.style.display = 'block';
        });
    }

    if (closeLetterBtn && letterPopup && letterSeal) {
        closeLetterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            letterPopup.style.display = 'none';
            letterSeal.style.display = 'flex';
        });
    }

    const solarVal = document.getElementById('solarVal');
    const waterVal = document.getElementById('waterVal');
    const batteryVal = document.getElementById('batteryVal');

    if (solarVal && waterVal && batteryVal) {
        setInterval(() => {
            const randomSolar = Math.floor(Math.random() * 5) + 91; // 91% - 95%
            const randomWater = Math.floor(Math.random() * 6) + 85; // 85% - 90%
            
            solarVal.innerText = `${randomSolar}%`;
            waterVal.innerText = `${randomWater}%`;

            if (Math.random() > 0.5) {
                batteryVal.innerText = "DRAINING";
                batteryVal.style.color = "var(--rust-orange)";
            } else {
                batteryVal.innerText = "RECHARGING";
                batteryVal.style.color = "#4CAF50";
            }
        }, 4000); // update every 4 seconds
    }

    const timelineTrack = document.querySelector('.timeline-container');

    if (timelineTrack) {
        timelineTrack.addEventListener('wheel', (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                timelineTrack.scrollLeft += evt.deltaY;
            }
        });
    }

    const interactiveCards = document.querySelectorAll('.interactive-log-card');

    interactiveCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            const toggleIcon = card.querySelector('.toggle-icon');
            if (card.classList.contains('expanded')) {
                toggleIcon.innerText = '[-]';
            } else {
                toggleIcon.innerText = '[+]';
            }
        });
    });

    //fullscreen
function toggleGameFullscreen() {
    const wrapper = document.getElementById('gameWrapper');
    if (!wrapper) {
        alert("Could not find id='gameWrapper' in your HTML!");
        return;
    }

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen();
        } else if (wrapper.webkitRequestFullscreen) {
            wrapper.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}