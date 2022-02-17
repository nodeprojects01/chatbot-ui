import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow'
import ChatIcon from "./components/ChatIcon";
import { sampleData, botResponses } from "./dataProvider/sampleData";
const genericFunction = require("./utils/genericFunction");

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [openChatWindow, setOpenChatWindow] = useState(false);

  useEffect(() => {
    if (openChatWindow) {
      setTimeout(function () {
        console.log("loading chat history if any");
        setIsConnected(true);   // fetch the conversation data from the database, set true if success else false
        setChatHistory(sampleData);   // set the conversation data
      }, 500);
    }
  }, [openChatWindow]);

  function handleUserMessage(userResponse) {
    appendMessage(userResponse);
    botResponse();
  }

  function appendMessage(message) {
    console.log("appending message to chathistory");
    setChatHistory(oldData => [...oldData, message]);
  }

  function handleChatIconClick() {
    setOpenChatWindow(!openChatWindow);
  }

  function botResponse() {
    const r = genericFunction.generateRandomNo(0, botResponses.length - 1);
    const msgText = botResponses[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      appendMessage({
        sender: "Bot",
        timestamp: genericFunction.formatDate(new Date()),
        type: "text",
        isMe: false,
        data: {
          text: msgText
        },
      });
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