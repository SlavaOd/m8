// Функция для переключения класса active у меню
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Показать текущий слайд
    updateSlider();

    // При клике на кнопку "Назад" показываем предыдущий слайд
    prevButton.addEventListener('click', showPrevSlide);

    // При клике на кнопку "Вперед" показываем следующий слайд
    nextButton.addEventListener('click', showNextSlide);

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'block' : 'none';
        });
    }
});

