import React from 'react';
import '../App.css';
import ChatIcon1 from "../images/icons/chaticon1.png";

function ChatIcon(props) {
    return (
        <button className="kc_fab_main_btn" onClick={() => props.onClick()}>
            {/* <i className="fas fa-comment-alt chatIcon"></i> */}
            <img src={ChatIcon1} style={{width:"50px", height: "50px"}} alt="Lauch Efia Chatbot"/>
        </button>
    )
}

export default ChatIcon