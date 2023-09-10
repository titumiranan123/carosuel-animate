let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');

let currentSlide = 0; // Change the initial slide index to 0

const removeSlide3ImgAnimateClass = () => {
    const slide3Images = document.querySelectorAll('.box-container .box .slide-3-img');
    slide3Images?.forEach((slide3Image) => {
        slide3Image.classList.remove('slide-3-img-animate');
    });
};

const removeSlide2ImgAnimateClass = () => {
    const slide2Images = document.querySelectorAll('.logo-container .logo-icon');
    slide2Images?.forEach((slide2Image) => {
        slide2Image.classList.remove('slide-3-img-animate');
    });
};

const manualNav = (manual) => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        btns[index].classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');

    // Add animation class to the active slide
    slides[manual].querySelector('.info')?.classList?.add('animate');
    slides[manual].querySelector('.heading')?.classList?.add('slide-2-animation');
    slides[manual].querySelector('.video-slide-4')?.classList?.add('video');
    slides[manual].querySelector('.box-container')?.classList?.add('box-animation');

    // Remove .slide-3-img-animate class from all elements when slide changes
    removeSlide3ImgAnimateClass();

    // Remove .slide-3-img-animate class from .logo-icon elements when slide changes
    removeSlide2ImgAnimateClass();

    // Add .slide-3-img-animate class to the current slide's elements
    const slide3Imagesadd = slides[manual].querySelectorAll('.box-container .box .slide-3-img');
    slide3Imagesadd.forEach((slide3Image) => {
        slide3Image.classList.add('slide-3-img-animate');
    });

    // Add .slide-3-img-animate class to .logo-icon elements when slide changes
    const slide2Images = document.querySelectorAll('.logo-container .logo-icon');
    slide2Images?.forEach((slide2Image) => {
        slide2Image.classList.add('slide-3-img-animate');
    });
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
            slides[i].querySelector('.heading')?.classList?.remove('slide-2-animation');
            // console.log(slides[i].querySelector('.heading'))
            slides[i].querySelector('.video-slide-4')?.classList?.remove('video');
            slides[i].querySelector('.box-container')?.classList?.remove('box-animation');

            // Remove .slide-3-img-animate class from all elements when slide changes
            removeSlide3ImgAnimateClass();

            // Remove .slide-3-img-animate class from .logo-icon elements when slide changes
            removeSlide2ImgAnimateClass();

            i = (i + 1) % slides.length;

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            slides[i].querySelector('.info')?.classList?.add('animate');
            slides[i].querySelector('.heading')?.classList?.add('slide-2-animation');
            slides[i].querySelector('.video-slide-4')?.classList?.add('video');
            slides[i].querySelector('.box-container')?.classList?.add('box-animation');

            // Add .slide-3-img-animate class to the current slide's elements
            const slide3Imagesadd = slides[i].querySelectorAll('.box-container .box .slide-3-img');
            slide3Imagesadd.forEach((slide3Image) => {
                slide3Image.classList.add('slide-3-img-animate');
            });

            // Add .slide-3-img-animate class to .logo-icon elements when slide changes
            const slide2Images = document.querySelectorAll('.logo-container .logo-icon');
            slide2Images?.forEach((slide2Image) => {
                slide2Image.classList.add('slide-3-img-animate');
            });

            repeater();
        }, 8000);
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
