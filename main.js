let menu = document.querySelector('#menu');
let nav = document.getElementsByTagName('nav')[0];

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}


var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    
    breakpoints: {
        540: {
          slidesPerView: 1,
          },
        768: {
          slidesPerView: 2,
          },
        1024: {
          slidesPerView: 3,
          },
      },
  });

  
var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
  
  breakpoints: {
      540: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
        },
      1024: {
        slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
  
  breakpoints: {
      540: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
        },
      1024: {
        slidesPerView: 3,
        },
    },
});



























