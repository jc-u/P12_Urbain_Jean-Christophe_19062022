import React, { FC } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts'

interface IProps {
  score: number
}

/**
 *
 * @param score
 * @returns {JSX}
 */
const CircleGraph: FC<IProps> = ({ score }: IProps) => {
  const data = [
    {
      uv: 100,
      display: 'none'
    },
    {
      uv: score * 100,
      fill: '#ff0000'
    }
  ]

  const CircleGraphLegend = () => {
    return (
      <div className="circlegraph__legend">
        <div className="circlegraph__legend--graph">{score * 100 }%</div>
        <div className="circlegraph__legend--text">de votre objectif</div>
      </div>
    )
  }

  return (
    <div className="circlegraph">
      <div className='circlegraph__title'>Score</div>
        <RadialBarChart
          data={data}
          barSize={10}
          innerRadius="0%"
          outerRadius="200%"
          startAngle={210}
          endAngle={-150}
          className="chart__circlegraph"
        >
          <RadialBar
            background={{ fill: '#fbfbfb' }}
            dataKey="uv"
          />
          <Legend verticalAlign='middle' align='center' content={CircleGraphLegend}/>

        </RadialBarChart>
  </div>
  )
}

export default CircleGraph