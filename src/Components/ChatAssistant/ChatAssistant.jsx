import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from '../ChatBot/config.jsx';
import MessageParser from '../ChatBot/MessageParser';
import ActionProvider from '../ChatBot/ActionProvider';
import "./ChatAssistant.css"
import React, { useState } from 'react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot chatbot-scroll">
      <img 
        className="Logo" 
        src={isOpen ? "/src/Components/ChatAssistant/pngegg.png" : "chatbotLogo.jpeg"} 
        alt="Logo" 
        onClick={toggleChatbot} 
      />
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
