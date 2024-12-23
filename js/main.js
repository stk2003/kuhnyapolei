document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Фильтр блюд
    const filterButtons = document.querySelectorAll('.dishes-filter button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Здесь будет логика фильтрации
        });
    });

    // Форма подписки
    const subscribeForm = document.querySelector('.subscribe-form');
    
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
    });
}); 