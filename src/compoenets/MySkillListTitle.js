import React from "react";

function MyskillListTitle() {
    const date = new Date();
    const subject = (date.getSeconds() % 2 === 0) ? `짝수 초` : `홀수 초`;

    const titleStyles = { color : '#C0FFEE', textDecoration: 'underline'};
    return (
        <header className="my-skill-list-title">
            <h2 style={titleStyles}>보유 역량 리스트 : {subject}</h2>
        </header>
    )
}

export default MyskillListTitle;