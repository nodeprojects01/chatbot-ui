import PlainText from "../chatResponseFormats/PlainText";

function MessageBox(props) {
    props = props.text;
    let myClass = props.isMe ? "chat right-chat" : "chat left-chat";
    let length = props.data.text.split(" ").length;
    return (
        <div key={`chat${new Date().getTime() * length}`} className={myClass}>
            <div key={`msgBubble${new Date().getTime()}`} className="chat-bubble">
                <div key={`msgInfo${new Date().getTime()}`} className="chat-info">
                    <div key={`msgName${new Date().getTime()}`} className="chat-info-name">{props.sender}</div>
                    <div key={`msgTime${new Date().getTime()}`} className="chat-info-time">{props.timestamp}</div>
                </div>

                <PlainText text={props.data.text} />
            </div>
            {props.isMe && <>{props.isRead ?
                <span className="readicon"><i className="fas fa-check"></i> </span> :
                <span className="notreadicon"><i className="fas fa-check"></i></span>}</>}
        </div>
    )
}

export default MessageBox;