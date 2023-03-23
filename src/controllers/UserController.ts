import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  createUser(req: Request, res: Response): Response {
    const { name, email, age } = req.body;
    const user = this.userService.create(name, email, age);
    return res.status(201).json(user);
  }

  getUsers(req: Request, res: Response): Response {
    const users = this.userService.list();
    return res.status(200).json(users);
  }
}

export default UserController;
