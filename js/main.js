document.addEventListener("DOMContentLoaded", () => {

    const orderButton = document.querySelector(".solution-button");
    const dialog = document.querySelector('dialog');
    const closeButton = document.querySelector(".solution .close");

    orderButton.addEventListener("click", () => {
        dialog.showModal();
    }, false);
    closeButton.addEventListener("click", () => {
        dialog.close();
    }, false);



    /*
        setTimeout(() => console.log(1));  //1
        Promise.resolve().then(() => console.log(2));   //2
        Promise.resolve()
            .then(() => setTimeout(() => console.log(3))); //3
        new Promise(() => console.log(4)); //4
        setTimeout(() => console.log(5)); //5
        */
});