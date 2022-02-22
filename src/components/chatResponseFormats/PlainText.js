

function PlainText(props) {
    const sender = "sender" in props ? props.sender : "Bot";
    let bubbleStyle = sender === "Me" ? "chat right-chat" : "chat left-chat";
    let length = props.text.split(" ").length;
    const textLines = props.text.split("\n\n");
    
    return (
        <div key={`chat${new Date().getTime() * length}`} className={bubbleStyle}>
            <div key={`msgBubble${new Date().getTime()}`} className="chat-bubble">
                {textLines.map((txt, i) =>
                    <div key={`msgText${new Date().getTime()}${i}`} className="chat-text">{txt.trim()}</div>
                )}
            </div>
        </div>
    )
}

export default PlainText;