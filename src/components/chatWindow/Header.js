

function Header(props) {
    return (
        <header className="messenger-header">
            <div className="messenger-header-title">
                <b>{props.title ? props.title : "Text Me"}</b>
            </div>
            <div className="messenger-header-options">
                <span className="messengerMinimize" onClick={() => props.handleMinizeClick()}>
                    <i className="fas fa-window-minimize"></i>
                </span>
                <span className="dropbtn" onClick={() => props.handleCloseClick()}>
                    <i className="fas fa-times"></i>
                </span>
            </div>
        </header>
    );
}

export default Header;