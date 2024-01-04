import Link from 'next/link'
import React from 'react'

const Buttons = ({btnText, link}:any) => {
  return (
    <div className='dynamic-btn'>
      <Link href={link}>{btnText}</Link>
    </div>
  )
}

export default Buttons
