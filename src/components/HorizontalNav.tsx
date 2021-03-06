
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

/**
 * HorizontalNav componant
 * @returns {JSX}
 */

const HorizontalNav: FC = () => {
  return (
        <div className="horizontal__nav">
          <Link className="logo" to="/"><img src={logo} alt="Logo SportSee"  /></Link>
            <Link className="nav-link" to="/">Accueil</Link>
            <Link className="nav-link" to="#">Profil</Link>
            <Link className="nav-link" to="#">Réglage</Link>
            <Link className="nav-link" to="#">Communauté</Link>
        </div>
  )
}

export default HorizontalNav