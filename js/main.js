document.addEventListener("DOMContentLoaded", () => {

    const orderButton = document.querySelector(".solution-button");
    const dialog = document.querySelector('.order-popup');
    const closeButton = document.querySelector(".order-popup .close");

    orderButton.addEventListener("click", () => {
        dialog.classList.toggle('is-hidden');
    }, false);
    closeButton.addEventListener("click", () => {
        dialog.classList.toggle('is-hidden');
    }, false);
});