import React from 'react';
import MessageBox from '../chatWindow/MessageBox';

function QuickReply(quickMessages, handleButtonClick, msgIndex) {
	return (
		<div key={`quickReplyBox${new Date().getTime()}`} className="quickReplyBox">
			<MessageBox text={quickMessages} />
			{!quickMessages.isClicked && quickMessages.quickReplies.map((_quickBtn, index) => {
				return <button key={`qucikBtn${new Date().getTime()}${index}`}
					className="quickreplyBtn"
					onClick={(event) => {
						handleButtonClick(event, { ..._quickBtn, ...{ action: "quickreply" } }, msgIndex);
					}}>
					{_quickBtn.title}
				</button>
			})}
		</div>

	)

}

export default QuickReply