import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  const handleHello=() => {
    const message = createChatBotMessage('Hello , I am InvestIQ , type in your query..');
    updateState(message,handleHello);
  }
  const companyDetails = () => {
    const message = createChatBotMessage('At StartConnect-Hub, our mission is to create a thriving ecosystem where entrepreneurs and investors can come together to turn ideas into reality. We understand the challenges that startups face, from securing funding to navigating the complexities of the business world. With our platform, entrepreneurs can bring their visions to life and take their businesses to new heights.');
    updateState(message,companyDetails);
  }
  
  const contactUs=()=>{
    const message = createChatBotMessage('Contact details can be viewed on our CONTACT US section, Feel free to drop us your query');
    updateState(message,contactUs);
  }

  return (
    <div>
        {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                actions: {
                    handleHello,
                    companyDetails,
                    contactUs,
                },
            });
        })}
    </div>
   );
}; 

export default ActionProvider;