import React from 'react';
import responseTypes from "../../models/responseTypes";

function Hyperlink(props) {
	return (
		<div key={`quickReplyBox${new Date().getTime()}`} className="quickReplyBox">
			{!props.options.isClicked && props.options.map((quickBtn, index) => {
				return <button key={`qucikBtn${new Date().getTime()}${index}`} className="quickreplyBtn"
					onClick={() => { props.handleButtonClick({ ...quickBtn, ...{ action: responseTypes.hyperLink } });
					}}>
					{quickBtn.title}
				</button>
			})}
		</div>

	)

}

export default Hyperlink