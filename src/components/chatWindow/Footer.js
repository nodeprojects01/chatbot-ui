import React, { useState } from 'react';

function Footer(props) {
    const [userMessage, setUserMessage] = useState("");

    return (
        <form className="messenger-inputarea" onSubmit={(e) => {
            e.preventDefault();
            if (userMessage) { props.handleSubmit(userMessage); setUserMessage(""); }
        }}>
            <input type="text" value={userMessage} onChange={(e) => setUserMessage(e.target.value)}
                className="messenger-input" placeholder="Enter your message..." />
            <div className="messenger-send-btn" onClick={() => props.handleSubmit(userMessage)}>Send</div>
        </form>
    );
}

export default Footer;