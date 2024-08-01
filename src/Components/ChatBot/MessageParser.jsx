import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    message = message.toLowerCase().trim(); 

    const options = [
      'services', 'pricing', 'contact', 'mission', 'location',
      'experience', 'startups', 'featured', 'benefits', 'resources',
      'collaboration', 'contact', 'SuccessStories', 'investors'
    ];

    const foundOption = options.find(option => message.includes(option));

    if (foundOption) {
      switch (foundOption) {
        case 'services':
          actions.handleServices();
          break;
        case 'pricing':
          actions.handleCost();
          break;
        case 'contact':
        case 'contact support':
          actions.contactUs();
          break;
        case 'mission':
          actions.companyDetails();
          break;
        case 'location':
          actions.handleLocation();
          break;
        case 'experience':
          actions.handleExperience();
          break;
        case 'startups':
          actions.handleStartups();
          break;
        case 'featured':
          actions.handleFeatured();
          break;
        case 'benefits':
          actions.handleBenefits();
          break;
        case 'resources':
          actions.handleResources();
          break;
        case 'collaboration':
          actions.handleCollaboration();
          break;
        case 'success stories':
          actions.handleSuccessStories();
          break;
        case 'investors':
          actions.handleInvestors();
          break;
        default:
          actions.defaultResponse();
      }
    } else {
      if (
        message.includes('hello') || 
        message.includes('hi') || 
        message.includes('hey') ||
        message.includes('who are you')
      ) {
        actions.handleHello();
      }else if (
        message.includes('thank you') || 
        message.includes('thanks') || 
        message.includes('okay') ||
        message.includes('hmm')
      ) {
        actions.handleThank();
      } else {
        actions.defaultResponse();
      }
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
