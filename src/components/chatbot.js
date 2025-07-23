
import React, { useState } from "react";
import { withLDConsumer } from "launchdarkly-react-client-sdk";
import axios from 'axios';
import niceRobot from "./../images/happyRobot.png";
import meanRobot from "./../images/meanRobot.png";
import pirateRobot from "./../images/pirateRobot.png";

const Chatbot = ({ flags, ldClient }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! Ask me a question!", timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  let personality = ldClient.variation("config-chatbot-personality");

  function changeAvatar() {
    if (personality === 'pirate') {
      return pirateRobot;
    } else if (personality === 'mean') {
      return meanRobot;
    } else {
      return niceRobot;
    }
  }

  function changeTitle() {
    if (personality === 'pirate') {
      return 'ARRRRobot';
    } else if (personality === 'mean') {
      return 'Stack Overflow Bot';
    } else {
      return 'Answerbot';
    }
  }

  const url = 'https://fxbft3m9yf.execute-api.us-east-2.amazonaws.com/default/answer?question=';

  async function sendRequest(url) {
    if (personality === 'placeholder') {
      return { text: "Error: Bot not found.", hasLink: false };
    } else {
      try {
        console.log('Making request to:', url);
        const response = await axios.get(url);
        console.log('API response:', response.data);
        return { text: response.data.answer, hasLink: false };
      } catch (apiError) {
        console.warn('External API failed, using fallback response:', apiError.message);
        // Fallback responses based on personality
        return getFallbackResponse(url);
      }
    }
  }

  function getFallbackResponse(url) {
    const question = decodeURIComponent(url.split('question=')[1] || '').toLowerCase();
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(question)}`;
    
    // Return an object with text and link for better rendering
    const responses = {
      pirate: {
        text: "Arrr! That be a fine question, matey! My treasure chest be empty on this one, but ye can search the seven seas! 🏴‍☠️",
        hasLink: true,
        linkUrl: googleSearchUrl,
        linkText: "🔍 Search Google"
      },
      mean: {
        text: "Seriously? Did you try googling that first? Here, let me do the hard work for you. 😤",
        hasLink: true,
        linkUrl: googleSearchUrl,
        linkText: "🔍 Google it yourself"
      },
      default: {
        text: "I'd love to help you find that answer! Let me create a Google search for you. 🔍",
        hasLink: true,
        linkUrl: googleSearchUrl,
        linkText: "🔍 Search Google"
      }
    };

    if (personality === 'pirate') {
      return responses.pirate;
    } else if (personality === 'mean') {
      return responses.mean;
    } else {
      return responses.default;
    }
  }

  function URLify(string) {
    const question = string.trim().replace(/\s/g, '%20');
    return url + question;
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    
    const question = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await sendRequest(URLify(question));
      const botMessage = { sender: "bot", ...response, timestamp: Date.now() };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot completely failed, using emergency fallback:', error);
      // Emergency fallback if even sendRequest fails
      const fallbackResponse = getFallbackResponse(URLify(question));
      const botMessage = { sender: "bot", ...fallbackResponse, timestamp: Date.now() };
      setMessages(prev => [...prev, botMessage]);
    }
    
    setIsTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const chatStyles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      height: '400px',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: '#6c5ce7',
      color: 'white',
      padding: '10px',
      fontSize: '14px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    avatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%'
    },
    messagesContainer: {
      flex: 1,
      padding: '10px',
      overflowY: 'auto',
      backgroundColor: '#f8f9fa'
    },
    message: {
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px'
    },
    userMessage: {
      justifyContent: 'flex-end'
    },
    messageBubble: {
      maxWidth: '80%',
      padding: '8px 12px',
      borderRadius: '18px',
      fontSize: '14px',
      lineHeight: '1.4',
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    linkButton: {
      display: 'inline-block',
      marginTop: '8px',
      padding: '6px 12px',
      backgroundColor: '#007bff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    botBubble: {
      backgroundColor: '#e9ecef',
      color: '#333'
    },
    userBubble: {
      backgroundColor: '#6c5ce7',
      color: 'white'
    },
    inputContainer: {
      padding: '10px',
      borderTop: '1px solid #eee',
      display: 'flex',
      gap: '8px'
    },
    input: {
      flex: 1,
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '20px',
      outline: 'none',
      fontSize: '14px'
    },
    sendButton: {
      padding: '8px 16px',
      backgroundColor: '#6c5ce7',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    typing: {
      fontStyle: 'italic',
      color: '#666',
      fontSize: '12px',
      padding: '5px 12px'
    }
  };

  return flags.showChatbot ? (
    <div style={chatStyles.container}>
      <div style={chatStyles.header}>
        <img src={changeAvatar()} alt="bot" style={chatStyles.avatar} />
        {changeTitle()}
      </div>
      
      <div style={chatStyles.messagesContainer}>
        {messages.map((message, index) => (
          <div 
            key={index} 
            style={{
              ...chatStyles.message,
              ...(message.sender === 'user' ? chatStyles.userMessage : {})
            }}
          >
            {message.sender === 'bot' && (
              <img src={changeAvatar()} alt="bot" style={{width: '20px', height: '20px', borderRadius: '50%'}} />
            )}
            <div 
              style={{
                ...chatStyles.messageBubble,
                ...(message.sender === 'bot' ? chatStyles.botBubble : chatStyles.userBubble)
              }}
            >
              {message.text}
              {message.hasLink && (
                <div>
                  <a 
                    href={message.linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={chatStyles.linkButton}
                  >
                    {message.linkText}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={chatStyles.typing}>
            {changeTitle()} is typing...
          </div>
        )}
      </div>
      
      <div style={chatStyles.inputContainer}>
        <input
          style={chatStyles.input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
        />
        <button style={chatStyles.sendButton} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  ) : null;
};

export default withLDConsumer()(Chatbot);