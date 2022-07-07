import { IPerformance } from '../types'
import HTTP from './HTTP'

/* It's a class that extends the HTTP class and implements the IPerformance interface */
class Performance extends HTTP<IPerformance> {
    id: number
    constructor(id: number) {
      super()
      this.id = id
    }

  public getPerformance() {
   return this.get(`http://localhost:3000/user/${this.id}/performance`)
  }
}

export default Performance