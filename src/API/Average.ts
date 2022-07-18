import { IAverage } from '../types'
import HTTP from './HTTP'

/* The Average class extends the HTTP class and implements the IAverage interface */
class Average extends HTTP<IAverage> {
    id: number
    constructor(id: number) {
      super()
      this.id = id
    }

  public async getAverage() {
   return this.get(`http://localhost:3000/user/${this.id}/average-sessions`)
  }
}

export default Average