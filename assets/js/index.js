const projects = new Swiper('.projects-swiper', {
    watchOverflow: true,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
        },
        576: {
            slidesPerView: 2.3,
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
    breakpoints: {
        320: {
            slidesPerView: 1.3,
        },
        576: {
            slidesPerView: 1.5,
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
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5.5,
        },
        1400: {
            slidesPerView: 7.8,
        },
    }
  
  });

  const team = new Swiper('.team-swiper', {
    watchOverflow: true,
    spaceBetween: 50,
    pagination: {
        el: '.collections-pagination',
      },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
        },
        576: {
            slidesPerView: 1.5,
        },
        992: {
            slidesPerView: 3.2,
        },
        1400: {
            slidesPerView: 3.5,
        },
    }
  
  });