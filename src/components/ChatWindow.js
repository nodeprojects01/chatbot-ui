import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import ChatTheme from './ChatTheme';
import PropTypes from 'prop-types'

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
	const [userMessage, setUserMessage] = useState("");

	function handleInputChange(event) {
		if (!event.target.value) return
		setUserMessage(event.target.value)
	}

	function handleButtonClick(data) {
		switch (data.action) {
			case "link":
				window.open(data.url, "_blank")
				break;
			case "quickreply":
				props.handleUserResponse({
					sender: "You",
					timestamp: formatDate(new Date()),
					type: "text",
					isMe: true,
					data: {
						text: data.response
					},
				})

				break;
			default:
				break
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const msgText = userMessage;
		if (!msgText) return;

		props.handleUserResponse({
			sender: "You",
			timestamp: formatDate(new Date()),
			type: "text",
			isMe: true,
			data: {
				text: msgText
			},
		});
		setUserMessage("")
	}

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
						<Footer handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
					</section>
			}
		</>
	);
}

export default ChatWindow