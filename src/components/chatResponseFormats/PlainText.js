

function PlainText(props) {
    return (
        <div key={`msgText${new Date().getTime()}`} className="chat-text">
            {props.text}
        </div>
    );
}

export default PlainText;