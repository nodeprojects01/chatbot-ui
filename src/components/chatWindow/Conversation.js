import React from 'react';
import QuickReply from "../chatResponseFormats/QuickReply";
import MessageBubble from "../chatWindow/MessageBubble";

function Conversation(props) {
    return (
        <main className="messenger-chat" >
            <div id="printme">
                {
                    props.messageData && props.messageData.map((msgObj, index) => {
                        if (msgObj.type === "quickreplies") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <QuickReply handleButtonClick={(data) => props.handleButtonClick(data)} options={msgObj} />
                            </div>
                        }
                        return <div key={`message${new Date().getTime()}${index}`}>
                            {<MessageBubble params={msgObj} />}
                        </div>
                    })
                }
            </div>
        </main>
    );
}

export default Conversation;