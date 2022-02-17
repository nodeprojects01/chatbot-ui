import React from 'react';

function QuickReply(props) {
	return (
		<div key={`quickReplyBox${new Date().getTime()}`} className="quickReplyBox">
			{!props.options.isClicked && props.options.data.options.map((quickBtn, index) => {
				return <button key={`qucikBtn${new Date().getTime()}${index}`} className="quickreplyBtn"
					onClick={() => { props.handleButtonClick({ ...quickBtn, ...{ action: "quickReply" } });
					}}>
					{quickBtn.title}
				</button>
			})}
		</div>

	)

}

export default QuickReply