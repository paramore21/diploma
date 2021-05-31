import {FormValidator, validationObject} from "./FormValidator.js"

const editContainer = document.querySelector(".popup")    /* контейнер формы*/ 
const editButton = document.querySelector(".header__login")
const homeButton = document.querySelector(".header__logo")

const closeEditButton = editContainer.querySelector(".popup__close-form")    /* закрыть форму */

const profileForm = document.forms.profile  /* форма профиля */

const formEditClassName = ".popup__container"

const editFormValidation = new FormValidator(validationObject, formEditClassName)

editFormValidation.enableValidation()


function openPopup(container){ /* открываем контейнер */
  container.classList.add("popup_opened");
  profileForm.reset()
  setEscListener();
}

function closePopup(container){
  removeEscListener(container)
  container.classList.remove("popup_opened");
}

/* закрытие по ESC */
function closeByEsc(evt){
  if(evt.key === "Escape"){
    const container = document.querySelector(".popup_opened").classList[0]
    closePopup(document.querySelector(`.${container}`))
  }
}

const setEscListener = () => {
  document.addEventListener("keydown", closeByEsc)
}

const removeEscListener = () => {
  document.removeEventListener("keydown", closeByEsc)
}

/* закрытие по оверлею */
const closeByOverlay = (container) => {
  container.addEventListener("click", function(evt){
    if(evt.target === evt.currentTarget) {
      closePopup(container)
    }
  })
}

function editInfo(){
  editFormValidation.removeSpanError()
  openPopup(editContainer);
}

function saveInformation(evt){
  evt.preventDefault();
  closePopup(editContainer);
}

////////////////////**** Работа с формой профиля ****/////////////////////////
editButton.addEventListener("click", editInfo)
closeEditButton.addEventListener("click", () => closePopup(editContainer))
profileForm.addEventListener("submit", saveInformation)

closeByOverlay(editContainer);
 

const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = [
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80', 
  'https://images.unsplash.com/photo-1525708827920-7d53586a1ab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80'
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
homeButton.addEventListener("click", () => {
  document.location.href = "index.html"
})