import "./App.css";
import React, { useState, useEffect } from "react";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import { addResponseMessage } from 'react-chat-widget';
import Chatbot from "./components/chatbot";
import QRCode from "./components/qrCode";
import HeaderLDLogo from "./components/headerLogo";
import Heart from "./components/heart";
import CustomerLogo from "./components/customerLogo";
import Astronaut from "./components/astronaut";

function App() {
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const allFlags = useFlags();
  const { configBackgroundColor } = allFlags;
  const ldClient = useLDClient();
  
  // Debug: Log all flag information
  console.log('=== FLAGS DEBUG ===');
  console.log('All flags object:', allFlags);
  console.log('All flag keys:', Object.keys(allFlags));
  console.log('configBackgroundColor value:', configBackgroundColor);
  console.log('config-background-color value:', allFlags['config-background-color']);
  
  // Try direct client access
  if (ldClient) {
    console.log('=== DIRECT CLIENT ACCESS ===');
    console.log('LD Client available:', !!ldClient);
    try {
      const directFlagValue = ldClient.variation('config-background-color', 'default');
      console.log('Direct flag access result:', directFlagValue);
      const allFlags2 = ldClient.allFlags();
      console.log('All flags from client.allFlags():', allFlags2);
    } catch (error) {
      console.log('Error accessing flags directly:', error);
    }
    console.log('================================');
  }
  
  // Check if flags object is a proxy and try to access it differently
  console.log('Flags object type:', typeof allFlags);
  console.log('Is proxy?', allFlags.constructor.name === 'Object');
  console.log('==================');

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = configBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return configBackgroundColor;
    };
    updateBackGroundColor();
  }, [configBackgroundColor]);


  useEffect(() => {
    addResponseMessage('Hi there! Ask me a question!');
  }, []);

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <HeaderLDLogo />
      </div>

      <div className={headerStyle}>
        <Heart />
        <CustomerLogo />
        <QRCode />
        <br />
        <Astronaut />
        <div className="chatbot">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default App;