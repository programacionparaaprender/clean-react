import { TaskReportImplRepository } from '../../../infraestructure/tasks/repositories/task-report-impl.repository';

export class GetTaskUseCase {
  execute(id:number) {
    let taskRepository = new TaskReportImplRepository();
    return taskRepository.getTask(id);
  }
}
