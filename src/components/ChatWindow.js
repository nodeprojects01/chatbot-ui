import React from 'react';
import '../App.css';
import ChatTheme from './ChatTheme';

import Header from "./chatWindow/Header";
import Conversation from "./chatWindow/Conversation";
import Footer from "./chatWindow/Footer";
import MainLoader from "./chatWindow/MainLoader";
import ResponseLoader from "../images/icons/loading_dots.gif";

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
				if (data.link) window.open(data.link, "_blank")
				break;
			case "quickReply":
				if (data.response) handleUserMessage(data.response);
				break;
			case "date":
				if (data.date) handleUserMessage(data.date);
				break;
			case "cardCarousel":
				if (data.date) handleUserMessage(data.response);
				break;
			default:
				break
		}
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
						{props.enableMessageLoader ? <img src={ResponseLoader} alt="loading bot response"
							style={{ width: "50px", position: "absolute", bottom: "45px", left: "40%" }} /> : ""}
						<Footer handleSubmit={(e) => { handleUserMessage(e) }} />
					</section>
			}
		</>
	);
}

export default ChatWindow