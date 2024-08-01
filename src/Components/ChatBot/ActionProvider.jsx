import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { shuffleArray } from './utils'; 

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const actions = {
    services: () => {
      const message = createChatBotMessage('Our services include investor management, financial services, full-service funds, and more.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    pricing: () => {
      const message = createChatBotMessage('Our pricing varies depending on the project. Please contact our sales team for detailed information.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    contact: () => {
      const message = createChatBotMessage('You can contact us through the Contact Us section on our website.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    mission: () => {
      const message = createChatBotMessage('Our mission is to create a thriving ecosystem for entrepreneurs and investors.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    location: () => {
      const message = createChatBotMessage('We are located in India.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    experience: () => {
      const message = createChatBotMessage('We have been in business for over 2 years.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    startups: () => {
      const message = createChatBotMessage('We work with a diverse range of startups across various industries.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    featured: () => {
      const message = createChatBotMessage('To get featured, submit your startup profile through our platform.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    benefits: () => {
      const message = createChatBotMessage('Joining StartConnectHub offers numerous benefits including access to investors and mentors.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    resources: () => {
      const message = createChatBotMessage('We offer resources like mentorship programs, funding opportunities, and business development guides.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    collaboration: () => {
      const message = createChatBotMessage('We encourage collaboration among startups.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    contactSupport: () => {
      const message = createChatBotMessage('Contact our support team through the Contact Us section on our website.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    SuccessStories: () => {
      const message = createChatBotMessage('We feature success stories from startups on our website.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    investors: () => {
      const message = createChatBotMessage('Investors can sign up on our platform to explore investment opportunities.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    handleHello: () => {
      const message = createChatBotMessage('Hello, I am InvestIQ. Type in your query or Here are some options you can choose from:', { 
        widget: 'options' 
      });
      updateState(message);
    },
    handleThank: () => {
      const message = createChatBotMessage('You are Welcome! If you have any more questions or need further assistance, feel free to ask.', { 
        widget: 'options' 
      });
      updateState(message);
    },
    defaultResponse: () => {
      const message = createChatBotMessage("I'm not sure about that. Can you ask something else? Here are some options you can choose from Or feel free to check out the Frequently Asked Questions.", { 
        widget: 'options' 
      });
      updateState(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;
