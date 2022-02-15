import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow'
import ChatIcon from "./components/ChatIcon";

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
      }, 3000);
    }
  }, [openChatWindow]);

  function handleUserMessage(userResponse) {
    appendMessage(userResponse);
    botResponse();
  }

  function appendMessage(message) {
    console.log("appending message to chathistory");
    setChatHistory(oldData => [...oldData.map((_item) => {
      return _item.sender !== "Bot" ? { ..._item, ...{ isRead: true } } : _item
    }), message]);
  }

  function handleChatIconClick() {
    setOpenChatWindow(!openChatWindow);
  }

  function botResponse() {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      appendMessage({
        sender: "Bot",
        timestamp: formatDate(new Date()),
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

      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1 >React Chat Window Pro Demo</h1>
        <h4>
          New Features
          <ul>
            <li>Read Receipt</li>
            <li>Stacked Quick Reply</li>
            <li>Chat Window Sizing (small, medium, large)</li>
            <li>IsConnected Loader</li>
          </ul>
        </h4>
      </div>

    </>
  );
}

export default App;


function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const sampleData = [{
  sender: "Bot",
  timestamp: formatDate(new Date()),
  type: "text",
  isMe: false,
  data: {
    text: "Hi, welcome to chat window pro"
  },
},
{
  sender: "You",
  timestamp: formatDate(new Date()),
  type: "text",
  isMe: true,
  isRead: true,
  data: {
    text: "I need help"
  },
},
{
  sender: "Bot",
  timestamp: formatDate(new Date()),
  type: "quickreplies",
  isMe: false,
  data: {
    text: "Sure, I can help you with below list."
  },
  isClicked: false,
  quickReplies: [
    {
      title: 'Buy',
      response: 'buy'
    },
    {
      title: 'Sell',
      response: 'Sell'
    },
    {
      title: 'Quick Reply',
      response: 'I am quick reply'
    },
    {
      title: 'Add to cart',
      response: 'add to cart'
    },
    {
      title: 'go to cart',
      response: 'go to cart'
    },
  ]
}

];