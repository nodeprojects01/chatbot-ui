import React from 'react';
import QuickReply from "../chatResponseFormats/QuickReply";
import MessageBox from "../chatWindow/MessageBox";

function Conversation(props) {
    return (
        <main className="messenger-chat" >
            <div id="printme">
                {
                    props.messageData && props.messageData.map((msg, index) => {
                        if (msg.type === "quickreplies") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                {QuickReply(msg, props.handleButtonClick, index)}
                            </div>
                        }
                        return <div key={`message${new Date().getTime()}${index}`}>
                            {<MessageBox text={msg} />}
                        </div>
                    })
                }
            </div>
        </main>
    );
}

export default Conversation;