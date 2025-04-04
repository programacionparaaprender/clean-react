import { ResponseDto } from './dtos/response.dto';
import { getTask, deleteTask } from '../../../shared/tasks';
import { TaskRemovableRepository } from '../../../domain/tasks/repositories/task-removable-repository';
import { IMetaData } from './dtos/interfaces/metadata.interface';
import { Task } from '../../../domain/tasks/entities/task.interface';


export class TaskRemovableImplRepository extends TaskRemovableRepository {
  deleteUser(id:number) {
    let tasksString:string | null = getTask();
    let tasksList: Task[] = [];
    if(tasksString != null){
      tasksList = JSON.parse(tasksString);
    }
    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "eliminación"
    }
    let meta:IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: tasksList.length - 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let task:Task | undefined = tasksList.find((x:Task)=>x.id === id);
    if(task == undefined || task == null){
      task = {
        id:0,
        name:'',
        state:0
      };
    }
    tasksList = tasksList.filter((x:Task) => x.id !== id);
    tasksList = deleteTask(tasksList);
    let responseDto = new ResponseDto<Task>(meta, task);
    return responseDto;
  }
}
