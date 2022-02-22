
function MultiLineText(props) {
    const sender = "sender" in props ? props.sender : "Bot";
    let bubbleStyle = sender === "Me" ? "chat right-chat" : "chat left-chat";

    return (
        <div key={`chat${new Date().getTime()}`} className={bubbleStyle}>
            <div key={`msgBubble${new Date().getTime()}`} className="chat-bubble">
                <div key={`msgText${new Date().getTime()}`} className="chat-text">
                    {props.options.map((txt, i) => <li key={`unli${new Date().getTime()}${i}`}>{txt.trim()}</li>)}
                </div>
            </div>
        </div>
    )
}

export default MultiLineText;