


const options = document.querySelector('.div-body');
const elemen = document.querySelector('.div-element');
const menu = options.querySelectorAll('.menu');
const show = elemen.querySelectorAll('.one');

menu.forEach((iteam , index) => {
    iteam.onclick = function (){
        var cnt = show[index]
       
        options.querySelector('.one.active2')?.classList.remove('active2');
        options.querySelector('.menu.active')?.classList.remove('active');
        this.classList.add('active');
        cnt.classList.add('active2');


    }


});




