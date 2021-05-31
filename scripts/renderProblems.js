import {Problem} from "./Problem.js";
const data = [
  {
  id: 1,
  title: "Решите систему линейных уравнений",
  condition: "$$\\begin{cases} 7x+5y=-40 \\\\ -5x+5y=+80 \\end{cases}$$",
  answer: "2"
  },
  {
    id: 2,
    title: "Решите квадратное уравнение",
    condition: "$$x^2 + 2x + 5 = 0$$",

    answer: "2"
  },
  {
    id: 3,
    title: "Решите систему линейных уравнений",
    condition: "$$\\begin{cases} 90x - 42y = 198 \\\\ -22x - 10y = -170\\end{cases}$$"
  }
]

function render(){
  const container = document.querySelector(".examples")
  data.forEach(item => {
    const problem = new Problem(item).renderItems()
    container.append(problem)
  })
}

render();