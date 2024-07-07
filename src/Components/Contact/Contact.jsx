import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.theme.value) ? "dark" : "light";
  const [emailError, setEmailError] = React.useState("");

  const [result, setResult] = React.useState("");

  //-----email vaidation check
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const approvedDomains = [".com", ".in", ".org", ".net"]; // Add more domains as needed

    if (emailPattern.test(email)) {
      let domain = email.substring(email.lastIndexOf("."));
      return approvedDomains.includes(domain);
    } else {
      return false;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setEmailError(""); // Reset email error message

    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address.");
        setResult("");
        return;
    }

    formData.append("access_key", "5759d7fc-28f1-473a-a904-ab8d5f981280");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div className={`contact ${theme}`} id="contact">
      <div className="contact-col">
        <h3 className="send">
          Send us a message<img src={msg_icon} alt=""></img>
        </h3>
        <p>
          Feel free to reach out through contact form. Your feedback, questions
          and suggestions are important to us.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt=""></img>
            <a href="mailto:startconnecthub@gmail.com">
              {" "}
              startconnecthub@gmail.com
            </a>
          </li>
          <li>
            <img src={phone_icon} alt=""></img>+91 1234567890
          </li>
          <li>
            <img src={location_icon} alt=""></img>Address xyz
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          ></input>
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}

          <label>Phone number</label>
          <input
            type="number"
            name="phone"
            pattern="\d{10}"
            minLength="10"
            maxLength="10"
            placeholder="Only digits are allowed"
            required
          ></input>
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <div className="btn-div">
            <button type="submit" className="btn dark-btn">
              Submit <img src={white_arrow}></img>
            </button>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
