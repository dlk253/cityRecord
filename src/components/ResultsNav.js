import React, { Component } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import ResultsSearch from './ResultsSearch'
import './ResultsNav.css'

export default class ResultsNav extends Component {

  constructor(props){
    super(props)
    this.onSearch = this.props.onSearch
  }

  render(){
    const resultsHeader = classnames('resultsHeader', 'grid-100')
    const resultsNavClass = classnames('ResultsNav', 'nav', 'grid-20')
    const advancedResultsSearch = classnames('advancedSearchOption', 'grid-15')
    return (
      <div className={resultsHeader}>
        <ResultsSearch onSearch={this.props.onSearch.bind(this)} />
          <div className={advancedResultsSearch}>
            <Link to="/">advanced search</Link>
          </div>
          <div className={resultsNavClass}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
          </div>
      </div>
    )
  }
}
