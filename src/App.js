import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow'
import ChatIcon from "./components/ChatIcon";
import { conversations } from "./dataProvider/sampleData";
import generateBotResponse from './models/botResponse';
const contextManager = require("./stateManager/manageSession");


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
        if (chatHistory.length === 0) {
          conversations("welcome").then(res => {
            console.log("welcome res obj > ", res);
            contextManager.cachePreviousState(res);
            const welcomeMessage = generateBotResponse(res);
            console.log("welcomeMessage > ", welcomeMessage);
            setChatHistory([...chatHistory, welcomeMessage]);   // set the conversation data
          }).catch(e => {
            console.log("error while setting the conversations >", e);
          });
        }
      }, 500);
    }
  }, [openChatWindow]);

  function handleUserMessage(userResponse) {
    setMessageLoader(true);
    appendMessage(userResponse);
    // botResponse(userResponse.text);
    console.log("starting second and third conversations -----********* -------");
    conversations(userResponse.message.toLowerCase()).then(res => {
      console.log("handleUserMessage res >> ", res);
      const botResp = generateBotResponse(res);
      const delay = 500;

      setTimeout(() => {
        appendMessage(botResp);
        setMessageLoader(false);
      }, delay);
    }).catch(e => {
      console.log("error while setting the conversations >", e);
    });
  }

  function appendMessage(message) {
    console.log("appending message to chathistory");
    setChatHistory(oldData => [...oldData, message]);
  }

  function handleChatIconClick() {
    contextManager.createConversationId();
    setOpenChatWindow(!openChatWindow);
  }

  function botResponse(userMsg) {
    conversations(userMsg.toLowerCase()).then(res => {
      console.log("welcome res > ", res);
      const botResp = generateBotResponse(res);
      const delay = 500;

      setTimeout(() => {
        appendMessage(botResp);
        setMessageLoader(false);
      }, delay);
    }).catch(e => {
      console.log("error while setting the conversations >", e);
    });

  }

  function handleMinimizeWindow() {
    contextManager.getConversationId();
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