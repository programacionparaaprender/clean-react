import { TaskReportImplRepository } from '../../../infraestructure/tasks/repositories/task-report-impl.repository'

export class GetAllTaskCase {
  execute() {
    let taskRepository = new TaskReportImplRepository();
    return taskRepository.getTaskList();
  }
}
