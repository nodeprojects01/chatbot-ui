import React, { useEffect, useRef } from 'react';
import '../App.css';
import ChatTheme from './ChatTheme';

import Header from "./chatWindow/Header";
import Conversation from "./chatWindow/Conversation";
import Footer from "./chatWindow/Footer";
import MainLoader from "./chatWindow/MainLoader";

function formatDate(date) {
	const h = "0" + date.getHours();
	const m = "0" + date.getMinutes();

	return `${h.slice(-2)}:${m.slice(-2)}`;
}

function ChatWindow(props) {
	function handleUserMessage(msg) {
		props.handleUserResponse({
			sender: "Me",
			timestamp: formatDate(new Date()),
			type: "plainText",
			data: {
				text: msg
			},
		});
	}

	function handleButtonClick(data) {
		switch (data.action) {
			case "hyperLink":
				window.open(data.link, "_blank")
				break;
			case "quickReply":
				handleUserMessage(data.response);
				break;
			default:
				break
		}
	}
	
    const el = useRef();
	useEffect(() => {
		if (props.isConnected)
			el.current.scrollIntoView({ behavior: 'smooth' });
	});

	return (
		<>
			{ChatTheme(props.theme, props.windowSize)}
			{
				!props.isConnected ? <MainLoader /> :
					<section className="messenger">
						<Header title={props.title}
							handleMinizeClick={() => props.minimizeWindow()}
							handleCloseClick={() => props.closeConversation()} />
						<Conversation messageData={props.chatHistory} handleButtonClick={handleButtonClick} />
            			<div ref={el} />
						<Footer handleSubmit={(e) => { handleUserMessage(e) }} />
					</section>
			}
		</>
	);
}

export default ChatWindow