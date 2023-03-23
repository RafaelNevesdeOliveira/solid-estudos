import User from '../models/User';
import { v4 as uuidv4 } from 'uuid'

class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create(name: string, email: string, age: number): User {
    const user = new User(uuidv4(), name, email, age);
    this.users.push(user);
    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export default UserService;