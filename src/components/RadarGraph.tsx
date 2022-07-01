import React from 'react'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { IPerformanceData, IKind } from '../types'


interface IProps {
  data: IPerformanceData[]
  kind: IKind
}

/**
 * 
 * @param object 
 * @returns {JSX}
 */
const RadarGraph: React.FC<IProps> = ({ data, kind }: IProps) => {

  enum Kind {
    'Cardio' = 1,
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité'
  }

  const chartData = data.map(performance => {
    return {
      value: performance.value,
      kind: Kind[performance.kind]
    }
  })

  return (
      <RadarChart
        cx='50%'
        cy='50%'
        outerRadius={70}
        width={300}
        height={300}
        data={chartData}
      >
        <PolarGrid radialLines={false} stroke='#ffffff'/>
        <PolarAngleAxis dataKey="kind"/>

        <Radar
          name="Mike"
          dataKey="value"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
  )
}

export default RadarGraph