const images = document.querySelectorAll('.interiorHouseDesign img');
const labels = document.querySelectorAll('.interiorDesignContainer p');
let picIndex = 0;
let interval = null;
var clicked = document.querySelector('.next');

document.addEventListener("DOMContentLoaded", initializePic);

function initializePic() {
    if (images.length >= 0) {
        images[picIndex].classList.add('pics');
        labels[picIndex].classList.add('pics');
        interval = setInterval(nextImg, 5000);
    }
}

function currentPic() {
    if (picIndex >= images.length) {
        picIndex = 0;
    }
    else if (picIndex < 0) {
        picIndex = images.length - 1;
    }


    images.forEach(function (img) {
        img.classList.remove('pics');
    });

    labels.forEach(function (label) {
        label.classList.remove('pics');
    });

    images[picIndex].classList.add('pics');
    labels[picIndex].classList.add('pics');
}

function nextImg() {
    picIndex++;
    currentPic();

    document.addEventListener('click', function () {
        if (clicked) {
            clearInterval(interval);
        }
    });
}

function prevImg() {
    clearInterval(interval);
    picIndex--;
    currentPic();

    document.addEventListener('click', function () {
        if (clicked) {
            clearInterval(interval);
        }
    });
}
