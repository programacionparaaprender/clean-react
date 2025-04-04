import { ResponseDto } from './dtos/response.dto'; 
import { TaskReportRepository } from '../../../domain/tasks/repositories/task-report-repository';
import { getTask, isValidJson } from '../../../shared/tasks';
import { Task } from '../../../domain/tasks/entities/task.interface';
import { IMetaData } from './dtos/interfaces/metadata.interface';
export class TaskReportImplRepository extends TaskReportRepository {

    override getTask(id:number) {
      let tasksString:string | null = getTask();
      let tasks = [];
      if(tasksString != null){
        tasks = JSON.parse(tasksString);
      }
      let task:Task = {
        id:0,
        name: "",
        state:0
      };
      if(tasks != null){
        task = tasks.find((x:Task)=>x.id === id);  
      }
      const message = {
          codigo: "001",
          mensaje: "satisfactorio",
          tipo: "lectura"
      }
      let meta = {
          mensajes: [
              message
          ],
          totalRegistros: 1,
          idTransaccion: "1",
          numeroPaginaSiguiente: "1",
          numeroTotalPaginas: "1"
      }
      let responseDto = new ResponseDto<Task>(meta, task);
      return responseDto;
  }

  override getTaskList() {
    //localStorage.setItem("tasks2",JSON.stringify([{id:1, name:"Task 1", state: 1}]));
    let tasksString:string | null = getTask();
    let tasks: Task[] = [];
    if(tasksString != null && isValidJson(tasksString)){
      console.log('tasksString');
      console.log(tasksString);
      tasks = JSON.parse(tasksString);
    }
    console.log('tasks');
    console.log(tasks);
    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta:IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: tasks.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto<Task[]>(meta, tasks);
    return responseDto;
  }
}
