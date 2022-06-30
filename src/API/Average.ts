import { IAverage } from '../types'
import HTTP from './HTTP'

class Average extends HTTP<IAverage> {
    id: number
    constructor(id: number) {
      super()
      this.id = id
    }

  public getAverage() {
   return this.get(`http://localhost:3000/user/${this.id}/average-sessions`)
  }
}

export default Average