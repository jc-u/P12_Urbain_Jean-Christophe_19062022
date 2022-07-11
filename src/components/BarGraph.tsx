import React, { FC } from 'react'
import { IActivity } from '../types'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface IProps {
  sessions: IActivity[]
}
type Payload = number[][]

/**
 *
 * @param sessions<IActivity[]>
 * @returns {JSX}
 */
const Activity: FC<IProps> = ({ sessions }: IProps) => {
  const data = []
  const payload: Payload = [[], []]

  /* Creating an array of objects with the following structure:
  [{day: '1', kilogram: '1', calories: '1'}, {day: '2', kilogram: '2', calories: '2'}, {day: '3',
  kilogram: '3', calories: '3'}] */
  for (let day = 0; day < sessions.length; day++) {
    const dayStr = (day + 1).toString()
    data.push({
      day: dayStr,
      kilogram: sessions[day].kilogram,
      calories: sessions[day].calories
    })
    payload[0].push(sessions[day].kilogram)
    payload[1].push(sessions[day].calories)
  }

  return (
    <div className='chart__bargraph'>
    <div className='chart__bargraph__legend'>
      <div className='chart__bargraph__legend--title'> Activité quotidienne</div>
      <div className='chart__bargraph__legend__values'>
      <ul className='chart__bargraph__legend__values--ul'>
        <li className='chart__bargraph__legend--weight'>Poids (kg)</li>
        <li className='chart__bargraph__legend--cal'>Calories brûlées (kCal)</li>
      </ul>
      </div>

    </div>

    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 40,
          right: 0,
          left: 40,
          bottom: 80
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day"
          tickMargin={20}
          tickSize={0}
          minTickGap={30}
          tickLine={false}
          padding={{ left: -50, right: -50 }}/>
          
        <YAxis
        yAxisId='weight'
        domain={['dataMin-1', 'dataMax+2']}
        orientation='right'
        axisLine={false}
        tickLine={false}
        tickMargin={20}
        tickCount={3}
        />
        <YAxis
        yAxisId='calories'
        axisLine={false}
        tickLine={false}
        hide/>

        <Tooltip content={(data: any) => <CustomTooltip active={data.active} payload={data.payload} label={data.label} />}/>
        <Bar
        yAxisId="weight"
          dataKey="kilogram"
          name="Poids(kg)"
          fill="#282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}/>
          
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * If the active prop is true, return a div with two divs inside it. If the active prop is false,
 * return null
 * @param {any}  - active - boolean, whether the tooltip is active or not
 */
const CustomTooltip = ({ active, payload, label }: any) => active
  ? (
  <div className="bargraph__chart__tooltip">
      <div>{payload[0].value}kg</div>
      <div>{payload[1].value}kCal</div>
  </div>
    )
  : null

export default Activity