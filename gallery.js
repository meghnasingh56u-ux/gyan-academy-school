// Gallery Filter

const filterButtons = document.querySelectorAll(".gallery-filter button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if(filter === "all" || item.classList.contains(filter)){

                item.style.display = "block";

            }else{

                item.style.display = "none";

            }

        });

    });

});



// Lightbox

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item=>{

    item.addEventListener("click",()=>{

        lightbox.classList.add("active");
        lightboxImage.src = item.querySelector("img").src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});