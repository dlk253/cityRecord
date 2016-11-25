import React from 'react'
import classnames from 'classnames'
import HomeNav from './HomeNav'
import strings from '../locale/helpText'
import './Help.css'

export default function Help(){
  const helpClass = classnames('Help', 'grid-container', 'grid-100')
  return(
    <div>
      <HomeNav />
      <div className={helpClass}>
        <h1>Help</h1>
        <h3>Search FAQ:</h3>
        <br/>
        <h4>{strings.searchQuestion}</h4>
        <br/>
        <p>{strings.searchAnswer}</p>
        <br/>
        <h4>{strings.keywordQuestion}</h4>
        <br/>
        <p>{strings.keywordAnswer}</p>
        <br/>
        <h4>{strings.agencyQuestion}</h4>
        <br/>
        <p>{strings.agencyAnswer}</p>
      </div>
    </div>
  )
}
