import React, { Component } from 'react'
import classnames from 'classnames'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './AdvancedSearch.css'


export default class AdvancedSearch extends Component{

  constructor(props){
    super(props)
    console.log(moment())
    this.state = {
      startDate: moment("1870-07-01"),
      endDate: moment("1880-07-01")
    }
  }

  handleStartDate(date){
    this.setState({
      startDate: date
    })
  }

  handleEndDate(date){
    this.setState({
      endDate: date
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.elements)
    console.log(this.props.keyword)
    /*
    this.context.router.push({
      pathname: '/results',
      query: { searchterm: event.target.elements[0].value }
    })
    */

  }

  render(){
    const advancedSearchClass = classnames('AdvancedSearch', 'grid-100', 'mobile-grid-100')
    const inputType = classnames('grid-50', 'prefix-50', 'inputType')
    const dateRangeFrom = classnames('grid-40', 'suffix-30', 'inputType', 'dateRange')
    const dateRangeTo = classnames('prefix-30', 'grid-40', 'suffix-30', 'inputType', 'dateRange')
    const datePickerClass = classnames('grid-75', 'dateSelect')
    const selection = classnames('grid-45', 'suffix-25', 'selectGroup')
    const agencyName = classnames('grid-65', 'prefix-25', 'suffix-10')
    const keywordType = classnames('grid-50', 'prefix-50', 'inputType', 'keywordLabel')
    const keywordStyle = classnames('grid-45', 'suffix-25', 'keyword')
    const keywordInput = classnames('grid-65', 'prefix-25', 'suffix-10')
    const buttonStyles = classnames('prefix-70', 'grid-30', 'advancedButtons')
    const applyButton = classnames('applyButton', 'prefix-5', 'grid-40')
    return(
        <div className={advancedSearchClass}>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <h2>Advanced Search Options</h2>
            <div className="grid-30">
              <p className={inputType}>By Date</p>
            </div>
            <div className={dateRangeFrom}>
              <label className="grid-25">From Date</label>
              <div className={datePickerClass}>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(e) => this.handleStartDate(e)} />
              </div>
            </div>
            <div className={dateRangeTo}>
              <label className="grid-25">To Date</label>
              <div className={datePickerClass}>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(e) => this.handleEndDate(e)} />
              </div>
            </div>

            <div className="grid-30">
              <p className={inputType}>By Agency</p>
            </div>
            <div className={selection}>
              <select name="agency" className={agencyName}>
                <option value="Aqueduct_Commission">Aqueduct Commission</option>
                <option value="AuditingBureu">Auditing Bureau</option>
                <option value="Board_of_Alderman">Board of Alderman</option>
              </select>
            </div>
            <div className="clear">&nbsp;</div>
            
            <div className="grid-30">
              <label className={keywordType}>Location Keywords</label>
            </div>
            <div className={keywordStyle}>
              <input type="text" className={keywordInput}/>
            </div>
            <div className={buttonStyles}>
              <button type="button" className={applyButton}>Cancel</button>
              <button type="submit" className={applyButton}>Apply</button>
            </div>
          </form>
        </div>
    )
  }
}
