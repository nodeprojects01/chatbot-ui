


function Footer(props) {
    return (
        <form className="messenger-inputarea" onSubmit={() => props.handleSubmit}>
            <input type="text" value={props.userMessage} onChange={() => props.handleInputChange}
                className="messenger-input"
                placeholder="Enter your message..." />
            <button type="submit" className="messenger-send-btn">Send</button>
        </form>
    );
}

export default Footer;