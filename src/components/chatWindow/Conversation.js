import React, { useState, useEffect, useRef } from 'react';
import QuickReply from "../chatResponseFormats/QuickReply";
import Hyperlink from "../chatResponseFormats/Hyperlink";
import TitleText from "../chatWindow/TitleText";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import MultiLineText from '../chatResponseFormats/MultiLineText';
import CardCarousel from '../chatResponseFormats/CardCarousel';
import responseTypes from '../../models/responseTypes';
import PlainText from '../chatResponseFormats/PlainText';

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

    function generateFollowText(ft, i) {
        console.log("generateFollowText  >>", ft, i);
        switch (ft.messageType) {
            case responseTypes.quickReply:
                return i === props.messageData.length - 1 ?
                    <QuickReply handleButtonClick={(data) => props.handleButtonClick(data)} options={ft.options} />
                    : ""

            case responseTypes.hyperLink:
                return <Hyperlink handleButtonClick={(data) => props.handleButtonClick(data)} options={ft.options} />

            case responseTypes.date:
                return i === props.messageData.length - 1 ?
                    <div style={{ marginBottom: "12px" }}>
                        <Calendar calendarType="US" onChange={setDate} />
                    </div> : ""

            case responseTypes.cardCarousel:
                return i === props.messageData.length - 1 ?
                    <CardCarousel params={ft} handleButtonClick={(data) => props.handleButtonClick(data)} />
                    : ""

            case responseTypes.multiLine:
                return <MultiLineText handleButtonClick={(data) => props.handleButtonClick(data)} options={ft.options} />

            default:
                return <PlainText text={ft.message} />
        }
    }


    return (
        <main className="messenger-chat" >
            <div id="printme">
                {console.log("Conversation props.messageData >>", props.messageData.length, props.messageData)}
                {
                    props.messageData && props.messageData.map((msgObj, i) => {
                        console.log("Conversation inloop msgObj >>", msgObj);
                        return <div key={`message${new Date().getTime()}${i}`}>
                            <TitleText params={msgObj} />
                            {"followMessage" in msgObj ? msgObj.followMessage.map(ft => generateFollowText(ft, i)) : ""}
                        </div>
                    })
                }
            </div>
            <div id="el" ref={el} />
        </main>
    );
}




export default Conversation;