import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props);
  return (
    <div className='py-10 justify-between h-[90vh] flex gap-10 px-18 items-center'>
        <LeftContent />
        <RightContent users={props.users}  />
      
    </div>
  )
}

export default Page1Content
