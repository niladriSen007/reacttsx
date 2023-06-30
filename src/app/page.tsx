import React from 'react'
import Parent from './components/children/Parent'
import Children from './components/children/Children'
import SecondChildren from './components/children/SecondChildren'

const page = () => {
  return (
    <div>
      <Parent>
        {/* <Children /> */}
        <SecondChildren />
      </Parent>
    </div>
  )
}

export default page