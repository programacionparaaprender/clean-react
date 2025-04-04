import { TaskRemovableImplRepository } from '../../../infraestructure/users/repositories/task-removable-impl.repository';

export class DeleteTaskUseCase {
  execute(param){
    let userRepository = new TaskRemovableImplRepository(); 
    return userRepository.deleteUser(param);
  }
}
