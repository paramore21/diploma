const createTaskButton = document.querySelector("#create-new-task")
const sendTaskButton = document.querySelector("#send-task")
const previewButton = document.querySelector(".task-create_preview")
const taskCreateForm = document.querySelector(".task-create__form")

createTaskButton.addEventListener("click", () => {
  document.location.href = "teacher__task-create.html"
})

sendTaskButton.addEventListener("click", () => {
  document.location.href = "about:blank"
})

const homeButton = document.querySelector(".header__exit")
homeButton.addEventListener("click", () => {
  console.log(homeButton)
  document.location.href = "index.html"
})