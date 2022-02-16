import React, { useState } from 'react';

function Footer(props) {
    const [userMessage, setUserMessage] = useState("");

    function handleInputChange(e) {
        if (e.target.value)
            setUserMessage(e.target.value);
    }
    console.log("msg-", userMessage);
    return (
        <form className="messenger-inputarea" onSubmit={(e) => { e.preventDefault(); props.handleSubmit(userMessage); }}>
            <input type="text" value={props.userMessage} onChange={(e) => handleInputChange(e)}
                className="messenger-input" placeholder="Enter your message..." />
            <button className="messenger-send-btn">Send</button>
        </form>
    );
}

export default Footer;