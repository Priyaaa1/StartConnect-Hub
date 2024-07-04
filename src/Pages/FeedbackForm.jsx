import { React, useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; 
import "./feedback.css";

function FeedbackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getEmojis = () => {
    switch (rating) {
      case 1:
        return "😡 😶 😶 😶 😶";
      case 2:
        return "😒 😒 😶 😶 😶";
      case 3:
        return "😐 😐 😐 😶 😶";
      case 4:
        return "😊 😊 😊 😊 😶";
      case 5:
        return "😁 😁 😁 😁 😁";
      default:
        return "😶 😶 😶 😶 😶";
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Initialize
  useEffect(() => {
    emailjs.init('mFZbq2zn7d1nHMIYM'); // EmailJS user ID
  }, []);

  const sendFeedbackEmail = async (formData) => {
    try {
      const response = await emailjs.send(
        'service_7ifnpdc',  // EmailJS service ID
        'template_lwovuy9', // EmailJS template ID
        formData,
        'mFZbq2zn7d1nHMIYM'     // EmailJS user ID
      );
      console.log('Email sent successfully:', response);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      rating,
      feedback
    };

    sendFeedbackEmail(formData).then(() => {
      setRating(null);
      setName("");
      setEmail("");
      setFeedback("");
      setIsSubmitted(true);
    }).catch((error) => {
      console.error('Error sending feedback email:', error);
    });
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-form">
        <div>
          <h2>We'd Love Your Feedback!</h2>
          <p>Let us know how we're doing and how we can improve. <br /> StartConnect-Hub</p>
          <div>
            <label htmlFor="rating">Rate us:</label>
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRatingChange(value)}
                >
                  {getEmojis().split(" ")[value - 1]} {/* Display only the selected emoji */}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="feedback">Your Feedback</label>
            <textarea
              id="feedback"
              rows="6"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Let us know how we can improve..."
              required
            ></textarea>
            <button type="submit">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setIsSubmitted(false)}>×</button>
            <h2>Thank you for your feedback! ❤️</h2>
            <div className="popup-icon"><img src="https://icons.veryicon.com/png/o/miscellaneous/monochromatic-surface-icon-library/success-56.png" width="84" alt="✔️" /></div>
            <p>Your feedback has been received.<br /> We appreciate the input you provide.</p>
            <button className="popup-button" onClick={() => setIsSubmitted(false)}> <a class="active" href="/" aria-current="page">Back to Home</a></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackPage;
