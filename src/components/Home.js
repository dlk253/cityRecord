import React, { Component } from 'react'
import classnames from 'classnames'
import HomeNav from './HomeNav'
import HomeSearch from './HomeSearch'
import './Home.css'

class Home extends Component {
  render(){
    const homeClass = classnames('Home')
    const logoClass = classnames('grid-container', 'logo-wrapper')
    const logo = classnames('grid-100', 'logo')
    return(
      <div className={homeClass}>
        <HomeNav />
        <div className={logoClass}>
          <img src={'src/images/logo.png'} alt="The City Record" className={logo}/>
        </div>
        <HomeSearch />
      </div>
    )
  }
}

export default Home
