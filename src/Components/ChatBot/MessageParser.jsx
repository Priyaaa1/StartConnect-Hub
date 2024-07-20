import React from 'react';

const MessageParser = ({ children, actions }) => {
    
  const parse = (message) => {
    message = message.toLowerCase().trim(); // Normalize the message

    // Check if the message is empty after trimming
    if (message === '') {
      actions.defaultResponse(); // Handle empty input
      return; // Return early to stop further processing
    }

    if (
      message.includes('company') ||
      message.includes('website') ||
      message.includes('mission') ||
      message.includes('what does this company do') ||
      message.includes('startconnect-hub') ||
      message.includes('startconnect') ||
      message.includes('site')
    ) {
      actions.companyDetails();
    } else if (
      message.includes('hello') || 
      message.includes('hi') || 
      message.includes('hey') ||
      message.includes('who are you') 
    ) {
      actions.handleHello();
    } else if (
      message.includes('how to reach') ||
      message.includes('contact') ||
      message.includes('phone')
    ) {
      actions.contactUs();
    } else if (
      message.includes('price') ||
      message.includes('pricing') ||
      message.includes('cost')
    ) {
      actions.handleCost();
    } else if (
      message.includes('how long') ||
      message.includes('experience')
    ) {
      actions.handleExperience();
    } else if (
      message.includes('where') ||
      message.includes('located')
    ) {
      actions.handleLocation();
    } else if (
      message.includes('services') ||
      message.includes('service') ||
      message.includes('what can you do')
    ) {
      actions.handleServices();
    } else if (
      message.includes('more details') ||
      message.includes('tell more') 
    ) {
      actions.handleMore();
       }else if (
      message.includes('graet') ||
      message.includes('okay') ||
      message.includes('fine') ||
      message.includes('thankyou') ||
      message.includes('thanks') 
    ) {
      actions.handleThank();
    } else if (
      message.includes('suggest questions') ||
      message.includes('give me questions') ||
      message.includes('what should i ask') ||
      message.includes('questions')
    ) {
      actions.suggestQuestions();
    } else {
      actions.defaultResponse();
    }
  };
   return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;