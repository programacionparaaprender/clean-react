import React, { useState, useEffect } from 'react';
import { GetAllTaskCase } from '../../application/tasks/usecases/get-all-task.usecase';
import { CreateTaskUseCase } from '../../application/tasks/usecases/create-task.usecase';
import { ResponseDto } from '../../infraestructure/tasks/repositories/dtos/response.dto';
import { Task } from '../../domain/tasks/entities/task.interface';
const TaskManager = () => {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTask, setEditTask] = useState<Task>({ id:0, name: '', state: 0 });
  const key = 'tasks2';
  const states = [
    { id: 1, name: 'Pendiente' },
    { id: 2, name: 'En progreso' },
    { id: 3, name: 'Terminado' }
  ];

  useEffect(() => {
    //localStorage.setItem("tasks2",JSON.stringify([{id:1, name:"Task 1", state: 1}]));
    const getAllTaskCase = new GetAllTaskCase();
    const response:ResponseDto<Task[]> = getAllTaskCase.execute();
    const storedTasks:Task[] = response.dates;
    console.log('tasks tasksManager');
    console.log(storedTasks);
    if (storedTasks) {
      setTasks(storedTasks);
    } 
  }, []);

  const saveTask = () => {
    const createTaskUseCase = new CreateTaskUseCase();
    if (!name.trim()) {
      alert('El nombre de la tarea no puede estar vacío.');
      return;
    }

    let newId = tasks.length + 1;
    while (tasks.some(task => task.id === newId)) {
      newId++;
    }
    const newTask = { id: newId, name, state: 1 };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    
    createTaskUseCase.execute(newTask);
    setName('');
  };

  const editTaskMethod = (index:number) => {
    setEditIndex(index);
    setEditTask({ ...tasks[index] });
  };

  const saveEdit = (index: number) => {
    const currentId = tasks[index].id;
    let updatedTasks: Task[] = [...tasks];
    updatedTasks[index] = { ...editTask, id: currentId, state: editTask.state ?? 0 };
    setTasks(updatedTasks);
    setEditIndex(null);
    localStorage.setItem(key, JSON.stringify(updatedTasks));
  };

  const deleteTask = (index:number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem(key, JSON.stringify(updatedTasks));
  };

  const getStateName = (stateId:number) => {
    const state = states.find(s => s.id === stateId);
    return state ? state.name : 'Desconocido';
  };

  return (
    <div className="table-responsive">
      <form className="form">
        <h2 className="text-center">Mantenimiento de tareas</h2>
        <div className="form-floating mb-3">
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" className="form-control" id="floatingInput" placeholder="task" />
            <label htmlFor="floatingInput">Agregar tarea</label>
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-primary" type="button" onClick={saveTask}>
            Guardar
          </button>
        </div>
      </form>

      <table className="table table-striped table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  <input
                    value={editTask.name}
                    onChange={(e) => setEditTask({ ...editTask, name: e.target.value })}
                    className="form-control"
                  />
                ) : (
                  <span>{task.name}</span>
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <select
                    value={editTask.state}
                    onChange={(e) => setEditTask({ ...editTask, state: parseInt(e.target.value) })}
                    className="form-select"
                  >
                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span>{getStateName(task.state)}</span>
                )}
              </td>
              <td>
                {editIndex !== index ? (
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => editTaskMethod(index)}
                  >
                    ✏️ Editar
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm mx-1"
                    onClick={() => saveEdit(index)}
                  >
                    💾 Guardar
                  </button>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(index)}
                >
                  🗑 Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManager;
