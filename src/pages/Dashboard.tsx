import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMain } from '../types'
import Main from '../API/Main'
import { IPerformance } from '../types'
import Performance from '../API/Performance'
import { IActivities } from '../types'
import Activities from '../API/Activities'
import { IAverage } from '../types'
import Average from '../API/Average'
import BarGraph from '../components/BarGraph'
import LineGraph from '../components/LineGraph'
import RadarGraph from '../components/RadarGraph'
import CircleGraph from '../components/CircleGraph'
import UserMetrics from '../components/UserMetrics'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

/**
 * UserPage page
 * @returns {JSX}
 */
 /* Using the useEffect hook to call the Main, Performance, Activity, and Average classes. */
 const Dashboard: FC = () => {
 /* Getting the id from the url. */
  const { id }:any = useParams()
  
/* This is the useState hook. It is used to store the data that is returned from the API calls. */
  const numId = parseInt(id)
  const [user, setUser] = useState<IMain>()
  const [activity, setActivity] = useState<IActivities>()
  const [performance, setPerformance] = useState<IPerformance>()
  const [average, setAverage] = useState<IAverage>()
  
  useEffect(() => {
    (async () => {
      const main = new Main(numId)
      const performance = new Performance(numId)
      const activity = new Activities(numId)
      const average = new Average(numId)

      const userMain = await main.getMain()
      const userPerformance = await performance.getPerformance()
      const userActivity = await activity.getActivity()
      const userAverage = await average.getAverage()

      setUser(userMain)
      setPerformance(userPerformance)
      setActivity(userActivity)
      setAverage(userAverage)
    })()
  }
  , [numId])

  return (
    <div className="dashboard">
      {<HorizontalNav/>}
      <div className="dashboard__main">
        {<VerticalNav />}
        <div className="dashboard__container">
          {user && <h1 className="welcome">Bonjour <span className="user__name">{user.userInfos.firstName}</span></h1>}
        <span> Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
          <div className="dashboard__charts">
            {activity && <BarGraph sessions={activity.sessions}/>}
            {average && <LineGraph sessions={average.sessions}/>}
            {performance && <RadarGraph data={performance.data} kind={performance.kind}/>}
            {user && <CircleGraph todayScore={user.todayScore} score={user.score}/>}
            {user && <UserMetrics keyData={user.keyData}/>}
          </div>
        </div>
      </div>
    </div>
  )
 }

 export default Dashboard