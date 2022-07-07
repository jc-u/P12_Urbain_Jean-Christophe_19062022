import { IActivities } from '../types'
import HTTP from './HTTP'

/* It's a class that extends the HTTP class and implements the IActivities interface. */
class Activities extends HTTP<IActivities> {
    id: number
    constructor(id: number) {
      super()
      this.id = id
    }

  public getActivity() {
   return this.get(`http://localhost:3000/user/${this.id}/activity`)
  }
}

export default Activities