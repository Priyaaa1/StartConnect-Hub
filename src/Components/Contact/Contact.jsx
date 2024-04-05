import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon} alt=''></img></h3>
            <p>Feel free to reach out through contact form. Your feedback, questions and suggestions are important to us.</p>
            <ul>
                <li><img src={mail_icon} alt=''></img>Contact@StartConnectHub.in</li>
                <li><img src={phone_icon} alt=''></img>+91 1234567890</li>
                <li><img src={location_icon} alt=''></img>Address xyz</li>
            </ul>
        </div>
    </div>
  )
}

export default Contact