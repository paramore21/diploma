class Api {
  constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }

  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  teacherLogin() {
    return fetch(`${this._url}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'},
    method: "POST",
    //mode: 'no-cors',
    body: JSON.stringify({
      "username": "radik",
      "password": "radik_msu_01",
    })
  })
  }

  studentLogin(){
    return fetch(`${this._url}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'},
      method: "POST",
      //mode: 'no-cors',
      body: JSON.stringify({
        "username": "ilnura",
        "password": "123123d.",
      })
    })
  }

}

const api = new Api({
  baseUrl: 'https://math.uzdevelop.ru/api/token/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json',
  }
});

function getTeacherToken() {
  api.teacherCreate().then(res => {return res.json()}).then(res => {
    //document.location.href = "teacher.html"
    console.log(res)
  })
}

const enterButton = document.querySelector(".login__enter-button")

enterButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  //getTeacherToken()
  openWindow()
})

const homeButton = document.querySelector(".header__logo")
const login = document.querySelector(".login__input")

function openWindow() {
  if(login.value === 'ilnura') {
    api.studentLogin().then(res => {return res.json()}).then(document.location.href = "examples.html")

  }
  else if(login.value === 'radik') {
    api.teacherLogin().then(res => {return res.json()}).then(document.location.href = "teacher.html")
  }
}

homeButton.addEventListener("click", () => {
  document.location.href = "index.html"
})