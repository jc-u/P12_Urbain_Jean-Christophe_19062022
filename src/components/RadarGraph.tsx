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

 /* It's a map function that takes the data from the props and maps it to a new array. */
  const chartData = data.map(performance => {
    return {
      value: performance.value,
      kind: Kind[performance.kind]
    }
  })

  return (
  <div className='chart__radargraph'>
    <ResponsiveContainer>
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
    </ResponsiveContainer>
  </div>
  )
}

export default RadarGraph