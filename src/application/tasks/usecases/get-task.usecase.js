import { TaskReportImplRepository } from '../../../infraestructure/users/repositories/task-report-impl.repository';

export class GetTaskUseCase {
  execute(id) {
    let userRepository = new TaskReportImplRepository();
    return userRepository.getUser(id);
  }
}
