import React, { Component } from 'react'
import classnames from 'classnames'
import ResultsNav from './ResultsNav'
import Result from './Result'
import './Results.css'

class Results extends Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
      searchterm: ''
    }

    this.findResultsByTerm = this.findResultsByTerm.bind(this)
  }

  findResultsByTerm(request){
    /* make the ajax call after component mounts */
    console.log("the request", request)
    fetch(request.uri)
    .then((response) =>
      response.json()
    )
    .then((json) =>
      this.setState({
        results: json,
        searchterm: request.searchterm
      })
    )
  }

  componentDidMount(){
    /* find results by term */
    /* move this to helpers and use */
    const host = process.env.HOST || 'http://localhost:8080/'
    //const request_resource = '/api/v1/records'
    const request_resource = 'api/v1/records'
    const query = '?keyword=' + this.props.location.query.searchterm
    //const request = host+request_resource+query
    const request = "https://damp-temple-97672.herokuapp.com/api/v1/records?keyword="+this.props.location.query.searchterm
    const requestObj = {
      uri: request,
      searchterm: this.props.location.query.searchterm
    }
    this.findResultsByTerm(requestObj)
  }

  render(){
    const resultsStyle = classnames('Results')
    const resultCountStyle = classnames('ResultCount', 'grid-container', 'grid-100')
    return(
      <div className={resultsStyle}>
        <ResultsNav onSearch={this.findResultsByTerm} />
        <p className={resultCountStyle}>About {this.state.results.length} results for {this.state.searchterm}</p>
        <Result results={this.state.results} searchterm={this.state.searchterm} />
      </div>
    )
  }
}

export default Results
