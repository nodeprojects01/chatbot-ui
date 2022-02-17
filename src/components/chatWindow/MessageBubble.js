import PlainText from "../chatResponseFormats/PlainText";
// import BotIcon from "../../images/icons/boticon.png";
// import UserIcon from "../../images/icons/usericon.png";
// <img src={BotIcon} style={{ width: "20px", height: "20px" }} /> 
// <img src={UserIcon} style={{ width: "20px", height: "20px" }} />

function MessageBubble(props) {
    let myClass = props.params.isMe ? "chat right-chat" : "chat left-chat";
    let length = props.params.data.text.split(" ").length;
    return (
        <div key={`chat${new Date().getTime() * length}`} className={myClass}>
            <div key={`msgBubble${new Date().getTime()}`} className="chat-bubble">
                <div key={`msgInfo${new Date().getTime()}`} className="chat-info">
                    <div key={`msgName${new Date().getTime()}`} className="chat-info-name">
                        {props.params.sender === "Bot" ? "Bot" : "Me"}
                    </div>
                    <div key={`msgTime${new Date().getTime()}`} className="chat-info-time">{props.params.timestamp}</div>
                </div>

                <PlainText text={props.params.data.text} />
            </div>
        </div>
    )
}


export default MessageBubble;