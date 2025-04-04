import { ResponseDto } from "../../../infraestructure/tasks/repositories/dtos/response.dto";
import { Task } from "../entities/task.interface";


export abstract class TaskWriterRepository {
  abstract create(params:Task):ResponseDto<Task>;
  abstract update(params:Task):ResponseDto<Task>;
}
