import React, { FC } from 'react'
import Metric from './Metric'
import IUserMetrics from '../lib/IUserMetrics'

/**
 *
 * @param object
 * @returns {JSX}
 */
const UserMetrics: FC<IUserMetrics> = ({ keyData }: IUserMetrics) => {
  const metricsTable = [
    {
      metric: 'Calories',
      unit: 'kCal',
      value: keyData.calorieCount
    },
    {
      metric: 'Proteines',
      unit: 'g',
      value: keyData.proteinCount
    },
    {
      metric: 'Glucides',
      unit: 'g',
      value: keyData.carbohydrateCount
    },
    {
      metric: 'Lipides',
      unit: 'g',
      value: keyData.lipidCount
    }
  ]

  return (
        <div className="chart__metrics">
          {
            metricsTable.map(object => {
              return <Metric key={object.metric} value={object.value} name={object.metric} unit={object.unit}/>
            })
          }
        </div>
  )
}

export default UserMetrics