import React, { useState } from 'react';
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

	function handleSubmit(e) {
		if (!e) return;

		props.handleUserResponse({
			sender: "You",
			timestamp: formatDate(new Date()),
			type: "text",
			isMe: true,
			data: {
				text: e
			},
		});
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
						<Footer handleSubmit={(e) => { handleSubmit(e) }} />
					</section>
			}
		</>
	);
}

export default ChatWindow