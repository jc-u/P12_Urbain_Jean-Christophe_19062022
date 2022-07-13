import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import VerticalNav from '../components/VerticalNav';
import HorizontalNav from '../components/HorizontalNav';

/**
 * Home page
 * @returns {JSX}
 */
const Home: FC = () => {
  return (
        <div className="home">
          <HorizontalNav/>
          <div className="home__container">
            <VerticalNav />
            <div className="connect">
            <div>Se connecter en tant que</div>
              <Link to="/user/12">Karl Dovineau </Link>
              <Link to="/user/18">Cecilia Ratorez </Link>
            </div>
          </div>
        </div>
  )
}

export default Home