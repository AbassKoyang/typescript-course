const taskForm = document.querySelector<HTMLFormElement>('.form')!;
const formInput = document.querySelector<HTMLInputElement>('.form-input')!;
const submitBtn = document.querySelector<HTMLButtonElement>('.btn')!;
const taskList = document.querySelector<HTMLUListElement>('.list')!;
console.log(taskForm, formInput, submitBtn);

type Task = {
    description: string;
    isCompleted: boolean;
}



let tasks : Task[] = loadTasks();
function loadTasks() : Task[]|[]{
    const tasksLocal : Task[] | null = localStorage.getItem('tasks');
    return tasksLocal ? JSON.parse(tasksLocal) : [];
}
tasks.forEach((task) => {
    renderTask(task);
});

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
    updateStorage();
}
function renderTask(task : Task) : void {
    let newTaskItem = document.createElement('li');
    newTaskItem.textContent = task.description;
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = task.isComplete;
    checkBox.addEventListener('change', () => {
        task.isComplete = !task.isComplete;
        updateStorage()
    });
    newTaskItem.appendChild(checkBox);
    taskList.prepend(newTaskItem);
}
function updateStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// localStorage.setItem('names', JSON.stringify([{name: 'boy', date:'boy'}]))
// const storedNames = localStorage.getItem('names');
// console.log(storedNames)
// console.log(JSON.parse(storedNames))
// localStorage.removeItem('tasks')