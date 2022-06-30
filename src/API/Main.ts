import { IMain } from '../types'
import HTTP from './HTTP'

class Main extends HTTP<IMain> {
    id: number
    constructor(id: number) {
      super()
      this.id = id
    }

  public async getMain() {
     return this.get(`http://localhost:3000/user/${this.id}`)
  }
}



export default Main