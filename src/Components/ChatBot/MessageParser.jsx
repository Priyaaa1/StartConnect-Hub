import React from 'react';

const MessageParser = ({ children, actions }) => {
    
  const parse = (message) => {
    message = message.toLowerCase() ;
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      actions.handleHello();
    } else if (message.includes('company') || 
               message.includes('website') ||
               message.includes("your website") ||
               message.includes('services') || 
               message.includes('mission') || 
               message.includes('what does this company do') || 
               message.includes('startconnect-hub')) {
                     actions.companyDetails();
    } else if (message.includes('how to reach') || message.includes('contact')) {
      actions.contactUs();
    } else if (message.includes('suggest questions') || message.includes('give me questions') || message.includes('what should i ask') || message.includes('questions') ) {
      actions.suggestQuestions();
    } else{
      actions.defaultResponse() ;
    }
  } 

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