const slideImage = document.querySelector('.show-image');


const img = slideImage.getElementsByTagName('img');

const length = img.length;
let i = 0;
 setInterval(() => {
    let width = img[0].offsetWidth ;
    if (i === length - 1) {
        i = 0;
    } else {
        i++; 
    }

    slideImage.style.transform = `translateX(${-width * i}px)`; 

} , 1500 );


