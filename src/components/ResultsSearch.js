import React, { Component } from 'react'
import classnames from 'classnames'
import './ResultsSearch.css'

export default class ResultsSearch extends Component {


  handleSubmit(e){
    e.preventDefault();
    const host = process.env.HOST || 'http://localhost:8080/'
    //const request_resource = '/api/v1/records'
    const request_resource = 'api/v1/records'
    const query = '?keyword=' + e.target.elements[0].value
    //const request = host+request_resource+query
    const request = "https://damp-temple-97672.herokuapp.com/api/v1/records"+query
    const requestObj = {
      uri: request,
      searchterm: e.target.elements[0].value
    }
    this.props.onSearch(requestObj)
  }

  render(){
    const resultsHeaderClass = classnames('ResultsSearch', 'grid-65')
    const logo = classnames('grid-35', 'logo')
    const resultsSearchClass = classnames('grid-65')
    const resultsSearchButton = classnames('grid-10', 'searchButton')
    return(
      <div className={resultsHeaderClass}>
        <div className={logo}>
          <img src={'src/images/logo.png'} alt="The City Record"/>
        </div>
        <div className={resultsSearchClass}>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" placeholder="SEARCH" className="grid-90"/>
            <button type="submit" className={resultsSearchButton}>go</button>
          </form>
        </div>
      </div>
    )
  }
}
