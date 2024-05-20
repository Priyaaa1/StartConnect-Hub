import React from 'react';
import { act } from 'react';

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') ||message.includes('Hi') ){
      actions.handleHello();
    }
    else if (
      message.includes('Tell me about your company') ||
      message.includes('Your company') ||
      message.includes('your company') ||
      message.includes('Mission of company') ||
      message.includes('mission of company')||
      message.includes('what does this company do?')||
      message.includes('What does this company do?')||
      message.includes('What is StartConnect-Hub?')
    ){
      actions.companyDetails();
    } 
    else if (message.includes('how to reach StartConnect-Hub?'))  {actions.contactUs();
    }
    else if(message.trim()==""){
      actions.emptyHandle();
    }
    else{
      actions.abchandle();
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