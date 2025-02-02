// import "./styles/style.scss";

//profile.html
const profileForm = document.getElementById("profileForm");
const profileBtnToChangeData = document.querySelector(".js-change-data");
const profileBtnToChangePassword = document.querySelector(".js-change-pas");
const saveDataFormBtn = document.querySelector(".js-save-data");
const savePasswordFormBtn = document.querySelector(".js-save-pas");
const profileDataWrapper = profileForm.querySelector(".js-data");
const profilePasswordWrapper = profileForm.querySelector(".js-passwords");
const formInputs = profileDataWrapper.querySelectorAll("input");
const formBtnsWrapper = profileForm.querySelector(".profile__right--bottom");

const changeImg = document.querySelector(".profile__right--img");
const profileModal = document.querySelector(".profile__modal");
const profileModalWrapper = document.querySelector(".profile__modal-wrapper");
const profileModalLabel = document.querySelector(".profile__modal-label");
const newImgName = document.querySelector(".profile__modal-img--name");
const profileImg = document.getElementById("profileImg");

profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

profileBtnToChangeData.addEventListener("click", () => {
    formInputs.forEach((item) => {
        item.removeAttribute("readonly");
    });
    formBtnsWrapper.style.display = "none";
    saveDataFormBtn.style.display = "flex";
});

saveDataFormBtn.addEventListener("click", () => {
    formInputs.forEach((item) => {
        item.setAttribute("readonly", true);
    });
    formBtnsWrapper.style.display = "flex";
    saveDataFormBtn.style.display = "none";
});

profileBtnToChangePassword.addEventListener("click", () => {
    profileDataWrapper.style.display = "none";
    formBtnsWrapper.style.display = "none";
    savePasswordFormBtn.style.display = "flex";
    profilePasswordWrapper.style.display = "flex";
});

savePasswordFormBtn.addEventListener("click", () => {
    profileDataWrapper.style.display = "flex";
    formBtnsWrapper.style.display = "flex";
    savePasswordFormBtn.style.display = "none";
    profilePasswordWrapper.style.display = "none";
});

function closeModal(event) {
    if (!profileModalWrapper.contains(event.target)) {
        profileModal.style.display = "none"; // Скрываем модальное окно
        document.removeEventListener("click", closeModal);
    }
}

changeImg.addEventListener("click", () => {
    profileModal.style.display = "flex";
    setTimeout(() => {
        document.addEventListener("click", closeModal);
    }, 10);
});

profileModal.addEventListener("change", (event) => {
    profileModalLabel.style.display = "none";
    newImgName.style.display = "block";
    newImgName.innerHTML = event.target.files[0].name;
    const newImg = event.target.files[0];
    const confirmNewImg = document.querySelector(".profile__modal-btn");
    if (newImg) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            confirmNewImg.addEventListener("click", () => {
                profileImg.src = e.target.result;
                profileModal.style.display = "none";
            });
        });
        reader.readAsDataURL(newImg);
    }
});
