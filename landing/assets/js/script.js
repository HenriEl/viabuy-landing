var modal = document.querySelector(".modal");
var openModal = document.querySelector(".open-modal");
var closeModal = document.querySelector(".close-modal");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


function changeMenuClass(navClass) {
    navClass.classList.toggle("close-nav");
    document.getElementById("mobile-menu").classList.toggle("show-menu");
}