import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from '../ChatBot/config.jsx';
import MessageParser from '../ChatBot/MessageParser';
import ActionProvider from '../ChatBot/ActionProvider';
import "./ChatAssistant.css"
import React, { useState } from 'react';
import cancel_icon from '../../assets/cancel-icon.png'

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot chatbot-scroll">
      <div className={`tooltip ${isOpen ? 'hidden' : ''}`}>
        <img 
          className="Logo" 
          src={isOpen ? cancel_icon : "bot.gif"} 
          alt="Logo" 
          onClick={toggleChatbot} 
        />
        <span className="tooltiptext">Welcome to Start Connect-Hub. <br /> How can I help you?</span>
      </div>
      {isOpen && 
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      }
    </div>
  );
}

export default ChatAssistant;
