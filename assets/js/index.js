const projects = new Swiper('.projects-swiper', {
    watchOverflow: true,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev',
      },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3.3,
        },
        1400: {
            slidesPerView: 4.3,
        },
    }
  
  });

  const collections = new Swiper('.collections-swiper', {
    watchOverflow: true,
    spaceBetween: 15,
    pagination: {
        el: '.collections-pagination',
      },
      navigation: {
          nextEl: '.collections-next',
          prevEl: '.collections-prev',
        },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            loop:true,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
            loop:true,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 2.2,
        },
        1400: {
            slidesPerView: 2.5,
        },
    }
  
  });

  const partners = new Swiper('.partners-swiper', {
    watchOverflow: true,
    spaceBetween: 50,
    loop: true,
    speed:1000,
    autoplay: {
      delay: 700,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 3.2,
        },
        576: {
            slidesPerView: 2.8,
        },
        992: {
            slidesPerView: 4.5,
        },
        1400: {
            slidesPerView: 7.8,
        },
    }
  
  });

  const team = new Swiper('.team-swiper', {
    watchOverflow: true,
    pagination: {
        el: '.collections-pagination',
      },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            loop:true,
            centeredSlides: true,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.3,
            spaceBetween: 15,
            loop:false,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 2.8,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 3.5,
        },
    }
  
  });