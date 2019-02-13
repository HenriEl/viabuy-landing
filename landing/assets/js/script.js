var modal = document.querySelector(".modal");
var openModal = document.getElementById("open-video");
var openModalFaceID = document.getElementById("open-video-face-id");
var openModalTouchID = document.getElementById("open-video-touch-id");
var closeModal = document.querySelector(".close-modal");
var video = document.getElementById("video-popup");

function toggleModal(selectedVideo) {

    if(selectedVideo == "open-video") {
        video.src = "assets/videos/AddCard_DE-Slide.mp4";
    } else if(selectedVideo == "open-video-face-id") {
        video.src = "assets/videos/04_FACEID_DE_v01.mp4";
    } else if(selectedVideo == "open-video-touch-id") {
        video.src = "assets/videos/build_03_TOUCHID_v041.mp4";
    }

    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }

    modal.classList.toggle("show-modal");
    closeModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openModal.addEventListener("click", function(){toggleModal(openModal.id)});
openModalFaceID.addEventListener("click", function(){toggleModal(openModalFaceID.id)});
openModalTouchID.addEventListener("click", function(){toggleModal(openModalTouchID.id)});
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


function changeMenuClass(navClass) {
    navClass.classList.toggle("close-nav");
    document.getElementById("mobile-menu").classList.toggle("show-menu");
}