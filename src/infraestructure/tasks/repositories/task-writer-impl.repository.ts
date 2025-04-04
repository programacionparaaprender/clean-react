import { ResponseDto } from './dtos/response.dto'; 
import { TaskWriterRepository } from '../../../domain/tasks/repositories/task-writer-repository';
import { getTask, saveTask, updateTask } from '../../../shared/tasks';
import { Task } from '../../../domain/tasks/entities/task.interface';
import { IMetaData } from './dtos/interfaces/metadata.interface';
import { IMessage } from './dtos/interfaces/message.interface';

export class TaskWriterImplRepository extends TaskWriterRepository {

  override update(params:Task) {
    let tasksString:string | null = getTask();
    let tasksList: Task[] = [];
    if(tasksString != null){
      tasksList = JSON.parse(tasksString);
    }

    const index = tasksList.findIndex(user => user.id === params.id);
    if (index !== -1) tasksList[index] = params;
    updateTask(tasksList);
    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "escritura"
    }
    let meta:IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto<Task>(meta, params);
    return responseDto;
  }

  override create(params:Task) {
    let tasksString:string | null = getTask();
    let tasksList: Task[] = [];
    if(tasksString != null){
      tasksList = JSON.parse(tasksString);
    }
    const message:IMessage = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "escritura"
    }
    let meta:IMetaData = {
      mensajes: [
        message
      ],
      totalRegistros: tasksList.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    saveTask(params);
    let responseDto = new ResponseDto<Task>(meta, params);
    return responseDto;
  }

}
