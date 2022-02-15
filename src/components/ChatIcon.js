import React from 'react';
import '../App.css';

function ChatIcon(props) {
    return (
        <button className="kc_fab_main_btn" onClick={() => props.onClick()}>
            <i className="fas fa-comment-alt chatIcon"></i>
        </button>
    )
}

export default ChatIcon