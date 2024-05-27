import React from 'react';
import {createChatBotMessage} from 'react-chatbot-kit'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const questions = [
    "What services do you offer?",
    "Can you tell me about your pricing?",
    "How can I contact your support team?",
    "What is the mission of your company?",
    "Where are you located?",
    "How long have you been in business?"
  ];

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello = () => {
    const message = createChatBotMessage('Hello, I am InvestIQ, type in your query.');
    updateState(message);
  };

  const companyDetails = () => {
    const message = createChatBotMessage('At StartConnect-Hub, our mission is to create a thriving ecosystem where entrepreneurs and investors can come together to turn ideas into reality. We understand the challenges that startups face, from securing funding to navigating the complexities of the business world. With our platform, entrepreneurs can bring their visions to life and take their businesses to new heights.');
    updateState(message);
  };

  const contactUs = () => {
    const message = createChatBotMessage('Contact details can be viewed on our CONTACT US section. Feel free to drop us your query.');
    updateState(message);
  };

  const defaultResponse = () => {
    const message = createChatBotMessage("I'm not sure about that. Can you ask something else? Or You can feel free to checkout Frequently asked questions") ;
    updateState(message) ;
  }

  const suggestQuestions = () => {
    const questionsMessage = questions.map((question, idx) => `${idx + 1}. ${question}`).join('\n');
    const message = createChatBotMessage(`Here are some questions you can ask:\n\n${questionsMessage}`);
    updateState(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            companyDetails,
            contactUs,
            suggestQuestions ,
            defaultResponse
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
