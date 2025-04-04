import { ResponseDto } from "../../../infraestructure/tasks/repositories/dtos/response.dto";
import { Task } from "../entities/task.interface";

export abstract class TaskReportRepository {
    abstract getTaskList():ResponseDto<Task[]>;
    abstract getTask(id:number):ResponseDto<Task>;
}
