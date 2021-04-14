export {FormValidator, validationObject}
const validationObject = {
  //formSelector: '.popup__form',
  inputSelector: '.popup__edit',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_type_active'
}
class FormValidator {
  constructor(validationObject, formSelector){
    this._formSelector = formSelector;
    this._inputSelector = validationObject.inputSelector;
    this._submitButtonSelector = validationObject.submitButtonSelector;
    this._inactiveButtonClass = validationObject.inactiveButtonClass;
    this._inputErrorClass = validationObject.inputErrorClass;
    this._errorClass = validationObject.errorClass
  };

      /* убираем старые ошибки валидации */
  removeSpanError = () => {
    const input = Array.from(document.querySelectorAll(`.${this._inputErrorClass}`))
    const error = Array.from(document.querySelectorAll(`.${this._errorClass}`))
    input.forEach(elem => elem.classList.remove(this._inputErrorClass))
    error.forEach(elem => elem.classList.remove(this._errorClass))
  }

  _inputInvalid = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
  }

  _findEmptyInputs = (inputList) => {
    return !inputList.some(inputElement => inputElement.value.length > 0)
  }

  _enableButton = (button, inactiveButtonClass) => {
    button.classList.remove(inactiveButtonClass)
    button.removeAttribute("disabled")
  }

  _disableButton = (button, inactiveButtonClass) => {
    button.classList.add(inactiveButtonClass)
    button.setAttribute("disabled", true)
  }

  toggleButton = (buttonElement, inactiveButtonClass, inputList) => {
    if(this._inputInvalid(inputList) || this._findEmptyInputs(inputList)){
      this._disableButton(buttonElement, inactiveButtonClass)
    } 
    else {  
      this._enableButton(buttonElement, inactiveButtonClass)
    }
  }

  _showError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.getAttribute("name")}__error`)
    inputElement.classList.add(inputErrorClass)
    errorElement.classList.add(errorClass)
    errorElement.textContent = inputElement.validationMessage
  }

  _hideError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.getAttribute("name")}__error`)
    inputElement.classList.remove(inputErrorClass)
    errorElement.classList.remove(errorClass)
    errorElement.textContent = ""
  }


  _hasInvalidInput = (formElement, inputElement, inputErrorClass, errorClass) => {
    if(inputElement.validity.valid){
      this._hideError(formElement, inputElement, inputErrorClass, errorClass)
    }
    else {
      this._showError(formElement, inputElement, inputErrorClass, errorClass)
    }
  }

  _setEventListeners = (formElement, inputErrorClass, errorClass, inputSelector, submitButtonSelector, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const button = formElement.querySelector(submitButtonSelector)
    inputList.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
        this._hasInvalidInput(formElement, inputElement, inputErrorClass, errorClass)
        this.toggleButton(button, inactiveButtonClass, inputList)
      })
      this.toggleButton(button, inactiveButtonClass, inputList)
    })
  }

  enableValidation = () => {
    const formList = document.querySelector(this._formSelector)
    formList.addEventListener("submit", evt => evt.preventDefault())
      this._setEventListeners(formList, this._inputErrorClass, this._errorClass, this._inputSelector, this._submitButtonSelector, this._inactiveButtonClass) 
  }
}