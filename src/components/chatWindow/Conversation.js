import React from 'react';
import QuickReply from "../chatResponseFormats/QuickReply";
import Hyperlink from "../chatResponseFormats/Hyperlink";
import MessageBubble from "../chatWindow/MessageBubble";

function Conversation(props) {
    return (
        <main className="messenger-chat" >
            <div id="printme">
                {
                    props.messageData && props.messageData.map((msgObj, index) => {
                        if (msgObj.type === "quickReply") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <MessageBubble params={msgObj} />
                                <QuickReply handleButtonClick={(data) => props.handleButtonClick(data)} options={msgObj} />
                            </div>
                        }
                        else if (msgObj.type === "hyperLink") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <MessageBubble params={msgObj} />
                                <Hyperlink handleButtonClick={(data) => props.handleButtonClick(data)} options={msgObj} />
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