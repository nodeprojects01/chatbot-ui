import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow'
import ChatIcon from "./components/ChatIcon";
import { botWelcomeMessage, conversations, generateBotResponse } from "./dataProvider/sampleData";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [openChatWindow, setOpenChatWindow] = useState(false);
	const [messageLoader, setMessageLoader] = useState(false);

  useEffect(() => {
    if (openChatWindow) {
      setTimeout(function () {
        console.log("loading chat history if any");
        setIsConnected(true);   // fetch the conversation data from the database, set true if success else false
        if (chatHistory.length === 0) setChatHistory(botWelcomeMessage);   // set the conversation data
      }, 500);
    }
  }, [openChatWindow]);

  function handleUserMessage(userResponse) {
    setMessageLoader(true);
    appendMessage(userResponse);
    botResponse(userResponse.data.text);
  }

  function appendMessage(message) {
    console.log("appending message to chathistory");
    setChatHistory(oldData => [...oldData, message]);
  }

  function handleChatIconClick() {
    setOpenChatWindow(!openChatWindow);
  }

  function botResponse(userMsg) {
    const botResp = generateBotResponse(conversations[userMsg.toLowerCase()]);
    const delay = botResp.data.text.split(" ").length * 100;

    setTimeout(() => {
      appendMessage(botResp);
      setMessageLoader(false);
    }, delay);
  }

  function handleMinimizeWindow() {
    setOpenChatWindow(false);
  }

  function closeConversation() {
    setOpenChatWindow(false);
    setChatHistory([]);
    setIsConnected(false);
  }

  return (
    <>
      {openChatWindow ?
        <ChatWindow
          theme="blue"
          title="efia"
          chatHistory={chatHistory}
          isConnected={isConnected}
          minimizeWindow={handleMinimizeWindow}
          closeConversation={closeConversation}
          handleUserResponse={handleUserMessage}
          enableMessageLoader={messageLoader}
          windowSize={"large"} />
        : <ChatIcon onClick={handleChatIconClick} />
      }

      <div style={{ margin: "1em" }}>
        <h1 >React Chatbot UI</h1>
      </div>

    </>
  );
}

export default App;