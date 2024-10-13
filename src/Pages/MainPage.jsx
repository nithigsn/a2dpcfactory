import React from 'react'
import HomePage from './HomePage'
import HowItWorks from './HowItWorks'
import Builds from './Builds'

function MainPage() {
  return (
    <div className='flex flex-col'>
        <HomePage/>
        <HowItWorks/>
        <Builds/>
      
    </div>
  )
}

export default MainPage
