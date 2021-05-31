export {FormValidator, validationObject}
const validationObject = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_type_active',
  spanErrors: '.popup__error'
}

class FormValidator {
  constructor(validationObject, formSelector){
    this._formSelector = formSelector;
    this._inputSelector = validationObject.inputSelector;
    this._submitButtonSelector = validationObject.submitButtonSelector;
    this._inactiveButtonClass = validationObject.inactiveButtonClass;
    this._inputErrorClass = validationObject.inputErrorClass;
    this._errorClass = validationObject.errorClass;
    this._spanErrors = validationObject.spanErrors;
    this._form = document.querySelector(this._formSelector);
    this._inputs = Array.from(this._form.querySelectorAll(`${this._inputSelector}`));
    this._button = this._form.querySelector(validationObject.submitButtonSelector)
  };

  /* убираем старые ошибки валидации */

  removeSpanError = () => {
    this._inputs.forEach((inputElement) => {
      const error = this._form.querySelector(`#popup__${inputElement.name}__error`);
      this._hideError(inputElement, error)
    });
  };

  _inputInvalid = () => {
    return this._inputs.some(inputElement => !inputElement.validity.valid)
  };


  _enableButton = () => {
    this._button.classList.remove(this._inactiveButtonClass)
    this._button.removeAttribute("disabled")
  };

  _disableButton = () => {
    this._button.classList.add(this._inactiveButtonClass)
    this._button.setAttribute("disabled", true)
  };

  toggleButton = () => {
    if(this._inputInvalid()){
      this._disableButton()
    } 
    else {  
      this._enableButton()
    }
  };

  _showError = (inputElement, errorElement) => {
    inputElement.classList.add(this._inputErrorClass)
    errorElement.classList.add(this._errorClass)
    errorElement.textContent = inputElement.validationMessage
  };

  _hideError = (inputElement, errorElement) => {
    inputElement.classList.remove(this._inputErrorClass)
    errorElement.classList.remove(this._errorClass)
    errorElement.textContent = ""
  };


  _hasInvalidInput = (inputElement) => {
    const errorElement = this._form.querySelector(`#popup__${inputElement.name}__error`)
    if(inputElement.validity.valid){
      this._hideError(inputElement, errorElement)
    }
    else {
      this._showError(inputElement, errorElement)
    }
  };

  _setEventListeners = () => {
    this._inputs.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
        this._hasInvalidInput(inputElement)
        this.toggleButton()
      })
      this.toggleButton()
    })
  };

  enableValidation = () => {
    this._form.addEventListener("submit", evt => evt.preventDefault())
    this._setEventListeners() 
  };
}