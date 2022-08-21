import { User } from '../models/user.model'

export class UserService {

  constructor() {
  }

  public getUser(): User {
    return {
      _id: 'u101',
      name: 'Yossi Amir',
      coins: 150,
      moves: []
    }
  }
}
