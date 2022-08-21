export class User {

  constructor(
      public _id?: string,
      public name: string = '',
      public coins: number = 0,
      public moves: object[] = []) {
  }

  setId?(id: string = 'r101') {
      // Implement your own set Id
      this._id = id
  }
}

