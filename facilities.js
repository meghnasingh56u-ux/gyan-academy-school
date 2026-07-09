const facilitySwiper = new Swiper(".facilitySwiper",{

    slidesPerView:1.15,

    spaceBetween:20,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    breakpoints:{

        768:{
            slidesPerView:2,
        },

        1024:{
            slidesPerView:3,
        }

    }

});