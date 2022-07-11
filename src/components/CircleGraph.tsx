import React, { FC } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts'

interface IProps {
  todayScore: number
  score: number
}

/**
 *
 * @param todayScore
 * @returns {JSX}
 */
const CircleGraph: FC<IProps> = ({ todayScore, score }: IProps) => {
  const data = [
    {
      uv: 100,
      display: 'none'
    },
    {
      uv: todayScore * 100 || score * 100,
      fill: '#ff0000'
    }
  ]

  const CircleGraphLegend = () => {
    return (
      <div className="circlegraph__legend">
        <div className="circlegraph__legend--graph">{todayScore * 100 || score * 100}%</div>
        <div className="circlegraph__legend--text">de votre objectif</div>
      </div>
    )
  }

  return (
    <div className="chart__circlegraph">
      <div className='circlegraph__title'>Score</div>
      <div className='circlegraph__background'>
      <ResponsiveContainer>
        <RadialBarChart
          data={data}
          barSize={10}
          innerRadius="0%"
          outerRadius="202%"
          startAngle={210}
          endAngle={-150}
        >
          <RadialBar
            background={{ fill: '#fbfbfb' }}
            dataKey="uv"
          />
          <Legend verticalAlign='middle' align='center' content={CircleGraphLegend}/>

        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  </div>
  )
}

export default CircleGraph