import {Problem} from "./Problem.js";
import {FormValidator, validationObject} from "./FormValidator.js"
const homeButton = document.querySelector(".header__exit")
homeButton.addEventListener("click", () => {
  console.log(homeButton)
  document.location.href = "index.html"
})

const formClassName = ".task-create__form"


const formValidation = new FormValidator(validationObject, formClassName)
formValidation.enableValidation()

previewButton.addEventListener("click", (ev) => {
  ev.preventDefault()
  Array.from(taskCreateForm.elements).forEach((element) => {
    console.log(element)
    console.log(element.value)
  })
})
function renderPreview() {
    const container = document.querySelector(".preview")
    data.forEach(item => {
      const problem = new Problem(item).renderItems()
      container.append(problem)
    })
  }


