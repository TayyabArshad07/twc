import React from 'react'

const ContactUs = () => {
  return (
    <form className='contactUsForm'>
        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone Number' />
        <textarea rows={5} cols={20} placeholder='message' />
        <button type='submit'>Contact</button>
    </form>
  )
}

export default ContactUs
