import { TaskWriterImplRepository } from '../../../infraestructure/users/repositories/user-writer-impl.repository';


export class UpdateTaskUseCase {
  execute(params) {
    let userRepository = new TaskWriterImplRepository();
    return userRepository.update(params);
  }
}
