import React, { Component, PropTypes} from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import AdvancedSearch from './AdvancedSearch'
import './HomeSearch.css'

class HomeSearch extends Component {

  constructor(props){
    super(props)
    this.state = {
      advanced: true,
      keyword: ""
    }
  }

  handleSubmit(event){
    event.preventDefault();
    // push to results to next page

    this.context.router.push({
      pathname: '/results',
      query: { searchterm: event.target.elements[0].value }
    })
  }

  handleChange(event){
    /* TODO: search term look-up */
    // pass in values to advanced search
    // console.log(event.target.value);
    //console.log(event.target.value);
    this.setState({
      keyword: event.target.value
    })
  }

  render(){
    const containerClass = classnames('HomeSearch', 'grid-container')
    const searchClass = classnames('grid-100', 'mobile-grid-100')
    const formClass = classnames('grid-70', 'prefix-15')
    const advancedSearchClass = classnames('grid-15', 'advancedSearchOption')
    const searchButtonClass = classnames('grid-5', 'searchButton')
    return(
      <div className={containerClass}>
        <div className={searchClass}>
          <form className={formClass} onSubmit={(event) => this.handleSubmit(event)}>
            <input className="grid-95" type="text" placeholder="SEARCH" onChange={(event) => this.handleChange(event)}/>
            <button className={searchButtonClass} type="submit" >go</button>
          </form>
          <div className={advancedSearchClass}>
            <Link to='/'>advanced search</Link>
          </div>
          {this.state.advanced ? <AdvancedSearch /> : ''}
        </div>
      </div>
    )
  }
}

HomeSearch.contextTypes = {
  router: PropTypes.object
}

export default HomeSearch
