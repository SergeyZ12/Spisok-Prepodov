// Добавляем обработчик клика на все карточки преподавателей
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Убираем увеличенную карточку, если она есть
        const existingExpanded = document.querySelector('.card-expanded');
        if (existingExpanded) {
            existingExpanded.classList.remove('card-expanded');
        }
        
        // Добавляем класс увеличения на текущую карточку
        this.classList.add('card-expanded');
        
        // Создаем затемнение фона
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);
        
        // Закрытие по клику на затемнение
        overlay.addEventListener('click', function() {
            document.querySelector('.card-expanded').classList.remove('card-expanded');
            this.remove();
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                const expanded = document.querySelector('.card-expanded');
                if (expanded) {
                    expanded.classList.remove('card-expanded');
                }
                const overlay = document.querySelector('.modal-overlay');
                if (overlay) {
                    overlay.remove();
                }
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
});

// Добавляем обработчик клика на карточку директора
const directorCard = document.querySelector('.director-card');
if (directorCard) {
    directorCard.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Убираем увеличенную карточку, если она есть
        const existingExpanded = document.querySelector('.card-expanded');
        if (existingExpanded) {
            existingExpanded.classList.remove('card-expanded');
        }
        
        // Добавляем класс увеличения на карточку директора
        this.classList.add('director-expanded');
        
        // Создаем затемнение фона
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);
        
        // Закрытие по клику на затемнение
        overlay.addEventListener('click', function() {
            document.querySelector('.director-expanded').classList.remove('director-expanded');
            this.remove();
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                const expanded = document.querySelector('.director-expanded');
                if (expanded) {
                    expanded.classList.remove('director-expanded');
                }
                const overlay = document.querySelector('.modal-overlay');
                if (overlay) {
                    overlay.remove();
                }
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
}

// Предотвращаем закрытие при клике на саму карточку
document.addEventListener('click', function(e) {
    if (e.target.closest('.card-expanded') || e.target.closest('.director-expanded')) {
        e.stopPropagation();
    }
});