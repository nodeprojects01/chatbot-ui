import React, { useState } from 'react';

function Footer(props) {
    const [userMessage, setUserMessage] = useState("");

    function handleInputChange(e) {
        if (e.target.value)
            setUserMessage(e.target.value);
    }

    return (
        <form className="messenger-inputarea" onSubmit={(e) => {
            e.preventDefault();
            if (userMessage) props.handleSubmit(userMessage); setUserMessage(""); console.log("after submit");
        }}>
            <input type="text" value={userMessage} onChange={(e) => handleInputChange(e)}
                className="messenger-input" placeholder="Enter your message..." />
            <div className="messenger-send-btn">Send</div>
        </form>
    );
}

export default Footer;