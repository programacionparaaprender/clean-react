import { ResponseDto } from "../../../infraestructure/tasks/repositories/dtos/response.dto";
import { Task } from "../entities/task.interface";

export abstract class TaskRemovableRepository {
  abstract deleteUser(id:number):ResponseDto<Task>;
}
