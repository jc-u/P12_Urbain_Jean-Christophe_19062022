import React, { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { ISession } from '../types'

interface IProps {
  sessions: ISession[]
}

type SessionObject = {
  name: string,
  sessionLength: number
}

/**
 *
 * @param sessions
 * @returns {JSX}
 */
const LineGraph: FC<IProps> = ({ sessions }: IProps) => {
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const data: SessionObject[] = []
  sessions.forEach(session => {
    data.push({
      name: weekDays[session.day - 1],
      sessionLength: session.sessionLength
    })
  }
  )
  const LineGraphTitle = () => {
    return (
      <div className="linegraph__title">Durée moyenne des sessions</div>
    )
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="linegraph__custom--tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      )
    }

    return null
  }
  return (
    <div className='chart__linegraph'>
      <ResponsiveContainer>
        <LineChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20
        }}
      >
        <XAxis dataKey="name"
          axisLine={false}
          tickLine={false}
          fill="#fff"
          />
        <YAxis hide={true}/>
        <Tooltip content={(data: any) => <CustomTooltip active={data.active} payload={data.payload} label={data.label} />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#ffffff"
          strokeWidth={2}
          dot={false}
          activeDot={{ stroke: 'white', r: 8 }}

        />
        <Legend verticalAlign='top' align='left' content={LineGraphTitle}/>
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}

export default LineGraph