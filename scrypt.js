document.addEventListener('DOMContentLoaded', function () {
    // Admission Form Handler
    var applyButton = document.getElementById('apply-admission-btn');
    var formContainer = document.getElementById('admission-form-container');

    if (applyButton && formContainer) {
        applyButton.addEventListener('click', function () {
            formContainer.classList.remove('hidden');
            applyButton.style.display = 'none';

            var firstField = formContainer.querySelector('input, select, textarea');
            if (firstField) {
                firstField.focus();
            }

            formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Image Carousel Handler
    var allImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.png',
        'image11.jpg',
        'image12.jpg',
        'image13.jpg',
    ];

    var carouselImage = document.getElementById('carousel-image');
    var indicatorsContainer = document.getElementById('carousel-indicators');
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');

    if (!carouselImage || !indicatorsContainer) {
        return;
    }

    var currentImageIndex = 0;
    var autoPlayInterval;
    var autoPlayDelay = 3000; // Change image every 3 seconds

    // Create indicator dots
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        allImages.forEach(function (_, index) {
            var dot = document.createElement('button');
            dot.className = 'indicator-dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', function () {
                currentImageIndex = index;
                updateCarousel();
                resetAutoPlay();
            });
            indicatorsContainer.appendChild(dot);
        });
    }

    // Update carousel display
    function updateCarousel() {
        carouselImage.src = allImages[currentImageIndex];

        // Update active indicator
        var dots = document.querySelectorAll('.indicator-dot');
        dots.forEach(function (dot, index) {
            dot.classList.toggle('active', index === currentImageIndex);
        });
    }

    // Next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        updateCarousel();
    }

    // Previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        updateCarousel();
    }

    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextImage, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextImage();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevImage();
            resetAutoPlay();
        });
    }

    // Pause on hover
    var carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // Initialize carousel
    createIndicators();
    updateCarousel();
    startAutoPlay();
});
