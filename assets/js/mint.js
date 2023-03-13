const avatars = new Swiper('.avatars-swiper', {
    watchOverflow: true,
    spaceBetween: 15,
    centeredSlides: true,
    loop:true,
    pagination: {
        el: '.avatars-pagination',
      },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3.5,
        },
        1400: {
            slidesPerView: 4.5,
        },
    }
  
  });

  const worlds = new Swiper('.worlds-swiper', {
    watchOverflow: true,
    spaceBetween: 15,
    centeredSlides: true,
    loop:true,
    pagination: {
        el: '.worlds-pagination',
      },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3.5,
        },
        1400: {
            slidesPerView: 4.5,
        },
    }
  
  });

  const roadmapItext = new Swiper('.swiper-roadmap-text', {
    slidesPerView: 1,
    loop: true,
    watchOverflow: false,
    allowTouchMove: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
  });


  const roadmapImg = new Swiper('.swiper-roadmap-img', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.roadmap-next',
      },
      pagination: {
        el: '.roadmap-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="active-pagination' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  });


  roadmapImg.controller.control = roadmapItext;
//   roadmapItext.controller.control = roadmapImg;

  