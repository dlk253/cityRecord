import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import './HomeNav.css'

export default function HomeNav(props){
  const navClass = classnames('HomeNav', 'nav', 'grid-100', 'mobile-grid-100')
  return(
      <div className={navClass}>
        {/* TODO: links to about and help */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/help'>Help</Link>
      </div>
    )
}
