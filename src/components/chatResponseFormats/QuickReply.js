import React from 'react';
import MessageBubble from '../chatWindow/MessageBubble';

function QuickReply(props) {
	return (
		<div key={`quickReplyBox${new Date().getTime()}`} className="quickReplyBox">
			<MessageBubble params={props.options} />
			{!props.options.isClicked && props.options.quickReplies.map((quickBtn, index) => {
				return <button key={`qucikBtn${new Date().getTime()}${index}`} className="quickreplyBtn"
					onClick={() => { props.handleButtonClick({ ...quickBtn, ...{ action: "quickreply" } });
					}}>
					{quickBtn.title}
				</button>
			})}
		</div>

	)

}

export default QuickReply