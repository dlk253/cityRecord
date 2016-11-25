import React from 'react'
import classnames from 'classnames'
import HomeNav from './HomeNav'
import strings from '../locale/aboutText'
import './About.css'

export default function About(){
  const aboutClass = classnames('About', 'grid-container')
  const contactInfo = classnames('grid-100', 'contact-info', 'contact')
  const aboutImage = classnames('grid-40', 'suffix-10')
  return(
    <div>
      <HomeNav />
      <div className={aboutClass}>
        <h1 className='grid-100'>About</h1>
        <div className='grid-100'>
          <p>{strings.copyParagraph1}</p>
          <p>{strings.copyParagraph2}</p>
          <p>{strings.copyParagraph3}</p>
          <p>{strings.copyParagraph4}</p>
          <p>{strings.copyParagraph5}</p>
           <img src={'src/images/neh_logo.jpg'} alt="National Endowment for the Humanities - 50 Years" className={aboutImage}/>
           <img src={'src/images/nyutandon.jpg'} alt="NYU Tandon School of Engineering Logo" className={aboutImage}/>
        </div>
        <h1 className='grid-100'>Contact</h1>
        <div className={contactInfo}>
          {strings.contact.map((info)=> {
              return (
                <p key={Math.random() * 10000}>{info}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
