import * as React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar(props) {
  return (
    <div>
      <div className="header__logo-bar">
        <h1>STAR WARS</h1>
      </div>
      <nav className="header__nav">
        <div><h3><Link to="/films" className="header__nav-link">films</Link></h3></div>
        <div><h3><Link to="people" className="header__nav-link">characters</Link></h3></div>
        <div><h3>planets</h3></div>
        <div><h3>starships</h3></div>
        <div><h3>vehicles</h3></div>
        <div><h3>species</h3></div>
      </nav>
    </div>
  )
}