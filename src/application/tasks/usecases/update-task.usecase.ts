import { Task } from '../../../domain/tasks/entities/task.interface';
import { TaskWriterImplRepository } from '../../../infraestructure/tasks/repositories/task-writer-impl.repository';


export class UpdateTaskUseCase {
  execute(params:Task) {
    let taskRepository = new TaskWriterImplRepository();
    return taskRepository.update(params);
  }
}
