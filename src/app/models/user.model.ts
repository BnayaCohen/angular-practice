import { Move } from "./move.model"

export class User {

  constructor(
      public _id?: string,
      public name: string = '',
      public coins: number = 150,
      public moves: Move[] = []) {
  }

  setId?(id: string = 'r101') {
      // Implement your own set Id
      this._id = id
  }
}

