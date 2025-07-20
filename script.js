document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Button Clicked!');
    });
});
