import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className="cont">
        <h1>Contact</h1>
        <div className='detail'>
            <div className='one'>
            <p className='head'>Opening hours</p>
            <p className='ans'>Monday to Friday 09:00 - 17:00</p>
            </div>

            <div className='two'>
            <p className='head'>Information</p>
            <li>Address: <span>Haagweg 4F10,2311 AA Leiden, NL</span></li>
            <li>Phone: <span>0031713410161</span></li>
            <li>Email:<span>info@compra.nl</span></li>
            </div>
           
            <div className='three'>
            <p className='head'>Questions?</p>
            <p className='ans'>Email us using this form -rest assured we will promptly upon your message Reply.</p>
            </div>
        </div>

        <div className='contact-2'>
            <form action="">
            <   input type="text" name="" id="" placeholder='Name' />
                <input type="email" name="" id="" placeholder='Email'  />
                <input type="number" name="" id="" placeholder='Phone' />
                <textarea type="text" row='4' name="" id="" placeholder='Message'  />
                <button type="submit" className="form-button">Submit</button>
            </form>
                
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Contact