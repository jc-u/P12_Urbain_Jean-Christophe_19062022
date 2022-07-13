import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Icon1 from '../assets/icon1.svg'
import Icon2 from '../assets/icon2.svg'
import Icon3 from '../assets/icon3.svg'
import Icon4 from '../assets/icon4.svg'

/**
 * HorizontalNav componant
 * @returns {JSX}
 */

const VerticalNav: FC = () => {
  return (
        <div className="vertical__nav">
          <Link to='#'>
            <img src={Icon1} className='nav-icon' alt="Lien Méditation"/>
          </Link>
          <Link to='#'>
            <img src={Icon2} className='nav-icon' alt="Lien Natation"/>
          </Link>
          <Link to='#'>
            <img src={Icon3} className='nav-icon' alt="Lien Cyclisme"/>
          </Link>
          <Link to='#'>
            <img src={Icon4} className='nav-icon' alt="Lien Musculation"/>
          </Link>
          <div className='copyright'>
            Copyright, Sportsee 2020
          </div>
        </div>

  )
}

export default VerticalNav