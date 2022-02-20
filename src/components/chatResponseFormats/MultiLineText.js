import MessageBubble from "../chatWindow/MessageBubble";


function MultiLineText(props) {
    const txtArr = props.params.data.text.split(" | ");
    console.log("fist msg -", txtArr);
    return (
        <div key={`quickReplyBox${new Date().getTime()}`} className="quickReplyBox">
            <li>
			{txtArr.map((txt, index) => {
				return <ul key={`qucikBtn${new Date().getTime()}${index}`} className="quickreplyBtn">
					{txt}
				</ul>
			})}
            </li>
		</div>
    );
}

export default MultiLineText;