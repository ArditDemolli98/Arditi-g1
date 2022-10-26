const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const sliderImages = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');

let counter = 0;

rightArrow.addEventListener('click', function () {
    sliderImages[counter].classList.remove('active');
    sliderImages[counter].classList.add('not-active');
    dots[counter].classList.remove('dot-active');

    counter++;
    if (counter > sliderImages.length - 1) counter = 0;

    sliderImages[counter].classList.add('active');
    sliderImages[counter].classList.remove('not-active');
    dots[counter].classList.add('dot-active');
})

leftArrow.addEventListener('click', function () {
    sliderImages[counter].classList.remove('active');
    sliderImages[counter].classList.add('not-active');
    dots[counter].classList.remove('dot-active');

    counter <= 0 ? counter = sliderImages.length - 1 : counter--;

    sliderImages[counter].classList.add('active');
    sliderImages[counter].classList.remove('not-active');
    dots[counter].classList.add('dot-active');

})

const removeActiveContent = function () {
    for (let i = 0; i < sliderImages.length; i++) {
        if (sliderImages[i].classList.contains('active')) {
            sliderImages[i].classList.remove('active');
            sliderImages[i].classList.add('not-active');
        }
        if (dots[i].classList.contains('dot-active')) dots[i].classList.remove('dot-active');
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        counter = i;
        removeActiveContent();

        sliderImages[i].classList.remove('not-active');
        sliderImages[i].classList.add('active');
        dots[i].classList.add('dot-active');
    })
}