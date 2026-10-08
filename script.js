    const allReviewsBtn = document.getElementById('allReviewsBtn');
    const reviewsModal = document.getElementById('reviewsModal');
    const modalClose = document.getElementById('modalClose');

    // Открыть модальное окно
    allReviewsBtn.addEventListener('click', function() {
        reviewsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Закрыть по кнопке "×"
    modalClose.addEventListener('click', function() {
        reviewsModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Закрыть по клику на фон
    reviewsModal.addEventListener('click', function(e) {
        if (e.target === reviewsModal) {
            reviewsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });