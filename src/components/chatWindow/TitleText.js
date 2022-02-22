import PlainText from "../chatResponseFormats/PlainText";
// import BotIcon from "../../images/icons/boticon.png";
// import UserIcon from "../../images/icons/usericon.png";
// <img src={BotIcon} style={{ width: "20px", height: "20px" }} /> 
// <img src={UserIcon} style={{ width: "20px", height: "20px" }} />

function TitleText(props) {
    let bubbleStyle = props.params.sender === "Me" ? "chat right-chat" : "chat left-chat";
    let length = props.params.text.split(" ").length;
    const textLines = props.params.text.split("\n\n");
    
    return (
        <div key={`chat${new Date().getTime() * length}`} className={bubbleStyle}>
            <div key={`msgBubble${new Date().getTime()}`} className="chat-bubble">
                <div key={`msgInfo${new Date().getTime()}`} className="chat-info">
                    <div key={`msgName${new Date().getTime()}`} className="chat-info-name">
                        {props.params.sender === "Bot" ? "Bot" : "Me"}
                    </div>
                    <div key={`msgTime${new Date().getTime()}`} className="chat-info-time">{props.params.timestamp}</div>
                </div>

                {textLines.map((txt, i) =>
                    <div key={`msgText${new Date().getTime()}${i}`} className="chat-text">{txt.trim()}</div>
                )}

            </div>
        </div>
    )
}


export default TitleText;