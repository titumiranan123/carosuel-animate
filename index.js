let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');

let currentSlide = 0; // Change the initial slide index to 0
const manualNav = (manual) => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        btns[index].classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');

    // Add animation class to the active slide
    slides[manual].querySelector('.info').classList.add('animate');

    console.log(manual);
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Autoplay
let repeat = () => {
    let i = currentSlide;
    let repeater = () => {
        setTimeout(() => {
            slides[i].classList.remove('active');
            btns[i].classList.remove('active');
            slides[i].querySelector('.info')?.classList?.remove('animate');

            i = (i + 1) % slides.length;

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            slides[i].querySelector('.info').classList.add('animate');

            repeater();
        }, 9000);
    };
    repeater();
};
repeat();

// Previous and Next Slide Buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    manualNav(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    manualNav(currentSlide);
});
