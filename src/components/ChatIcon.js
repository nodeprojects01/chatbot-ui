import React from 'react';
import '../App.css';
import ChatIconImg from "../images/icons/chaticon.png";

function ChatIcon(props) {
    return (
        <button className="kc_fab_main_btn" onClick={() => props.onClick()}>
            <img src={ChatIconImg} style={{width:"50px", height: "50px"}} alt="Lauch Efia Chatbot"/>
        </button>
    )
}

export default ChatIcon