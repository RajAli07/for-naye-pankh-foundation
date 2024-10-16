// Carousel functionality
let currentIndex = 0; // Start at the first image
const images = document.querySelectorAll('#carouselImages img');
const totalImages = images.length;

// Function to update the carousel display
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset for sliding
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Function to move slides
function moveSlide(step) {
    currentIndex = (currentIndex + step + totalImages) % totalImages; // Loop through images
    updateCarousel();
}

// Event listeners for carousel buttons
document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const direction = event.target.textContent === '❮' ? -1 : 1; // Determine direction based on button clicked
        moveSlide(direction);
    });
});

// Automatically change images every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// WhatsApp Button Click Functionality
document.querySelector('.whatsapp-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const phoneNumber = '919876543210'; // Replace with your WhatsApp number
    const message = 'Hello! I would like to know more about your services.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Open in a new tab
});
