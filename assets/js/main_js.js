const formContainer = document.getElementById('reservation-form');
const cuisineSelect = document.getElementById('cuisine');
const subCuisineSelect = document.getElementById('sub-cuisine');

cuisineSelect.addEventListener('change', () => {
    if (cuisineSelect.value === 'Western') {
        formContainer.classList.add('show-sub-cuisine');
    } else {
        formContainer.classList.remove('show-sub-cuisine');
    }
});