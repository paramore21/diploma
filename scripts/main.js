import {FormValidator, validationObject} from "./FormValidator.js"

const editContainer = document.querySelector(".popup")    /* контейнер формы*/ 
const editButton = document.querySelector(".header__login")

const closeEditButton = editContainer.querySelector(".popup__close-form")    /* закрыть форму */

const editName = editContainer.querySelector(".popup__edit_type_name")
const editDescription = editContainer.querySelector(".popup__edit_type_description")


const profileForm = document.forms.profile  /* форма профиля */

const formEditClassName = ".popup"


const editFormValidation = new FormValidator(validationObject, formEditClassName)

editFormValidation.enableValidation()


function openPopup(container){ /* открываем контейнер */
  container.classList.add("popup_opened");
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

 