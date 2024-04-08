import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5759d7fc-28f1-473a-a904-ab8d5f981280");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' id='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon} alt=''></img></h3>
            <p>Feel free to reach out through contact form. Your feedback, questions and suggestions are important to us.</p>
            <ul>
                <li><img src={mail_icon} alt=''></img>Contact@StartConnectHub.in</li>
                <li><img src={phone_icon} alt=''></img>+91 1234567890</li>
                <li><img src={location_icon} alt=''></img>Address xyz</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required></input>
            <label>Phone number</label>
            <input type='tel' name='phone' placeholder='Enter your phone' required></input>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow}></img></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact