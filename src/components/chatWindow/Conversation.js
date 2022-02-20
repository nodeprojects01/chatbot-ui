import React, { useState, useEffect, useRef } from 'react';
import QuickReply from "../chatResponseFormats/QuickReply";
import Hyperlink from "../chatResponseFormats/Hyperlink";
import MessageBubble from "../chatWindow/MessageBubble";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import MultiLineText from '../chatResponseFormats/MultiLineText';
import CardCarousel from '../chatResponseFormats/CardCarousel';

function Conversation(props) {
    const el = useRef(null);
    useEffect(() => {
        if (el.current) {
            el.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'center'
                })
        }
    });

    function setDate(value) {
        if (value) props.handleButtonClick({ action: "date", date: moment(value).format('DD-MM-YYYY') })
    }

    return (
        <main className="messenger-chat" >
            <div id="printme">
                {
                    props.messageData && props.messageData.map((msgObj, index) => {
                        if (msgObj.type === "quickReply") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <MessageBubble params={msgObj} />
                                {index === props.messageData.length - 1 ?
                                    <QuickReply handleButtonClick={(data) => props.handleButtonClick(data)} options={msgObj} />
                                    : ""}
                            </div>
                        }
                        else if (msgObj.type === "hyperLink") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <MessageBubble params={msgObj} />
                                <Hyperlink handleButtonClick={(data) => props.handleButtonClick(data)} options={msgObj} />
                            </div>
                        }
                        else if (msgObj.type === "date") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <MessageBubble params={msgObj} />
                                {index === props.messageData.length - 1 ?
                                    <div style={{ marginBottom: "12px" }}>
                                        <Calendar calendarType="US" onChange={setDate} />
                                    </div> : ""}
                            </div>
                        }
                        else if (msgObj.type === "cardCarousel") {
                            return <div key={`message${new Date().getTime()}${index}`}>
                                <MessageBubble params={msgObj} />
                                {index === props.messageData.length - 1 ?
                                    <CardCarousel params={msgObj} handleButtonClick={(data) => props.handleButtonClick(data)}/> 
                                    : ""}
                            </div>
                        }
                        return <div key={`message${new Date().getTime()}${index}`}>
                            {<MessageBubble params={msgObj} />}
                        </div>
                    })
                }
            </div>
            <div id="el" ref={el} />
        </main>
    );
}

export default Conversation;