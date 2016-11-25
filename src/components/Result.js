import React, { Component } from 'react'
import classnames from 'classnames'
import './Result.css'

export default class Result extends Component{

  mung(text){
    const searchtermIndex = text.indexOf(this.props.searchterm)
    console.log(searchtermIndex);
    // TODO: this could crash if there are less than 1000 characters past the index?
    return searchtermIndex > -1 ?  text.substring(searchtermIndex, searchtermIndex+1000) : text.substring(500, 1500) ;
  }

  render(){
    const resultWrapper = classnames('Result', 'grid-container', 'grid-100')
    const resultListStyle = classnames('ResultList', 'grid-80', 'suffix-20')
    return (
      <div className={resultWrapper}>
        <ol className={resultListStyle}>
          {this.props.results.map((result) => {
             return (<li key={result._id} className="ResultItem">
              <div>
                <a href="" className="ResultTitle">{result.date}</a>
              </div>
              <div>
                <a href={"/pdfs/"+result.filename} className="ResultName">{result.filename}</a>
              </div>
                <p className="ResultText">{this.mung(result.rawOCR)}</p>
             </li>)
          })}
        </ol>
      </div>
    )
  }

}
