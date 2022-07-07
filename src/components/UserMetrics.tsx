import React, { FC } from 'react'
import { IMetrics } from '../types'
import Metric from './Metric'

interface IProps {
  keyData: IMetrics
}

/**
 *
 * @param object
 * @returns {JSX}
 */
const UserMetrics: FC<IProps> = ({ keyData }: IProps) => {
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