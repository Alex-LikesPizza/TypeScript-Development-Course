// Decorators
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor{
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor =  {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    } 
  }
  
  return adjDescriptor;
}
// Interfaces and Custom types
interface Validatable {
  value: string | number,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number,
}
// Utility functions
function validate(validatableInput: Validatable){
  let isValid = true;
  if(validatableInput.required){
    isValid = isValid && validatableInput.value.toString().trim().length > 0;
  }
  if(validatableInput.minLength != null && typeof validatableInput.value === "string"){
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength
  }
  if(validatableInput.maxLength != null && typeof validatableInput.value === "string"){
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
  }
  if(validatableInput.min != null && typeof validatableInput.value === "number"){
    isValid = isValid && validatableInput.value >= validatableInput.min
  }
  if(validatableInput.max != null&& typeof validatableInput.value === "number"){
    isValid = isValid && validatableInput.value <= validatableInput.max
  }
  return isValid
}

// Classes
class ProjectState {
  private listeners: any[] = [];
  private projects: any[] = [];
  private static instance: ProjectState;

  private constructor() {

  }

  static getInstance(){
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }
  addProject(title: string, description: string, people: number){
    const newProject = {
      id: Math.floor(Math.random() * 100_000_000).toString(),
      title,
      description,
      people,
    }
    this.projects.push(newProject);
    for(const listenerFn of this.listeners){
      listenerFn(this.projects.slice());
    }
  }
  addListener(listenerFn: Function){
    this.listeners.push(listenerFn);
  }
}
const projectState = ProjectState.getInstance();

class ProjectList{
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: any[] = [];
  constructor(
    private type: "active" | "finished" 
  ){
    this.templateElement = document.getElementById("project-list") as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`;
    projectState.addListener((projects: any[]) => {
      this.assignedProjects = projects;
      this.renderProjects();
    })
    this.attach();
    this.renderContent();
  }
  private renderProjects(){
    const listEl = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;
    for(const item of this.assignedProjects){
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      console.log("appending")
      listEl.appendChild(listItem);
    }
  }
  private renderContent(){
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + " PROJECTS";
  }
  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor(){
    this.templateElement = document.getElementById("project-input") as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;
    
    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = parseInt(this.peopleInputElement.value);

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
      minLength: 1,
      maxLength: 50,
    }
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 20,
      maxLength: 200,
    }
    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 20,
    }
    if(!validate(titleValidatable) ||
       !validate(descriptionValidatable) ||
       !validate(peopleValidatable)){
        alert("Invalid input, please fill in all fields.");
        return;
       }
    return [enteredTitle, enteredDescription, enteredPeople]
    
  }
  @Autobind
  private submitHandler(event: Event){
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if(Array.isArray(userInput)){
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);

      this.clearInputs();
    }
  }
  private clearInputs(){
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }
  private configure(){
    this.element.addEventListener("submit", this.submitHandler);
  }
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");