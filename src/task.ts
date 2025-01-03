const taskForm = document.querySelector<HTMLFormElement>('.form')!;
const formInput = document.querySelector<HTMLInputElement>('.form-input')!;
const submitBtn = document.querySelector<HTMLButtonElement>('.btn')!;
const taskList = document.querySelector<HTMLUListElement>('.list')!;
console.log(taskForm, formInput, submitBtn);

type Task = {
    description: string;
    isCompleted: boolean;
}


const tasksLocal : Task[] | null = JSON.parse(localStorage.getItem('tasks'));
let tasks : Task[] = []
if(tasksLocal)[
    tasks = [...tasksLocal]
]
console.log(tasks)
if(tasksLocal){
    tasks.map((task: Task) => {
    renderTask(task);
})}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(formInput.value !== ''){
        const task : Task = {
            description: formInput.value,
            isCompleted: false
        };
        //add task
        addTask(task);
        //render task
        renderTask(task);
        formInput.value = '';
        return;
    } else {
        alert('Field is empty')
    }

})

function addTask(task : Task) : void {
    tasks.push(task)
    if(tasks){
        localStorage.setItem('tasks', JSON.stringify([...tasks]))
    } else{
        localStorage.setItem('tasks', JSON.stringify([task]))
    }
}
function renderTask(task : Task) : void {
    let newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = `<p>${task.description}</p> <br> <p>${task.isCompleted}</p>`
    taskList.prepend(newTaskItem)
}

// localStorage.setItem('names', JSON.stringify([{name: 'boy', date:'boy'}]))
// const storedNames = localStorage.getItem('names');
// console.log(storedNames)
// console.log(JSON.parse(storedNames))
// localStorage.removeItem('tasks')