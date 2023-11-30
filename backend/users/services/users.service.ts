import UsersDao from '../daos/users.dao';
import { CreateUserDto } from '../dto/create.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';

class UsersService {
  
  async createUser(resource: CreateUserDto) {
    delete resource.confirmPassword;
    return await UsersDao.createUser(resource);
  }

  async getUserByEmailWithPassword(email: string) {
    return await UsersDao.getUserByEmailWithPassword(email);
  }

}

export default new UsersService();