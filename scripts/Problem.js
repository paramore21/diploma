export class Problem {
  constructor(data){
    this._id = data.id;
    this._tag = data.tag;
    this._title = data.title;
    this._condition = data.condition;
    this._answer = data.answer;
    this._templateElement = "#example";
    this._numberClass = ".examples__number";
    this._titleCLass = ".examples__title";
    this._conditionClass = ".examples__task-condition";
  }

  renderItems(){
    const element = document.querySelector(this._templateElement).content.cloneNode(true)
    const container = element.querySelector(".example")
    const examplesNumber = container.querySelector(this._numberClass)
    const examplesTitle = container.querySelector(this._titleCLass)
    const examplesCondition = container.querySelector(this._conditionClass)

    examplesNumber.textContent = this._id
    examplesTitle.textContent = this._title
    examplesCondition.textContent = this._condition
    
    return element
  }
}