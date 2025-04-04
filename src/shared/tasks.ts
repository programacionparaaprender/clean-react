import { Task } from "../domain/tasks/entities/task.interface";

/* export let tasks = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'María López', email: 'maria@example.com' },
];

 */
export function getTask(){
    const tasks = localStorage.getItem("tasks2");
    return tasks;
}

export function isValidJson(value: string): boolean {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  }

/* export function getTask(){
    try {
      const tasks = localStorage.getItem("tasks2");
      // Si no hay tareas, o el valor no es un JSON válido, devolvemos un array vacío
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      return []; // Devolvemos un array vacío en caso de error
    }
} */


export function updateTask(tasksTemp:Task[]) {
    localStorage.setItem('tasks2', JSON.stringify(tasksTemp));
    return tasksTemp;
}

export function saveTask(taskTemp:Task) {
    let tasksString:string | null = getTask();
    let tasksList: Task[] = [];
    if(tasksString != null){
      tasksList = JSON.parse(tasksString);
    }
    tasksList.push(taskTemp);
    localStorage.setItem('tasks2', JSON.stringify(tasksList));
    return tasksList;
}

export function deleteTask(tasksTemp:Task[]) {
    console.log('tasks delete');
    console.log(tasksTemp);
    localStorage.setItem('tasks2', JSON.stringify(tasksTemp));
    return tasksTemp;
}