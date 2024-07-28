import React from "react";

function OnClickEventHandler() {
    function onClickFunc () {
        return alert('Func로 호출 이에용');
    }
    return (
        <>
            <h1>OnClickEventHandler</h1>
            <button onClick={function() {alert('무명 메서드 호출이에용');}}>무명 메서드 호출</button>
            <button onClick={ () => {alert('화살표함수 호출 이에용.')}}>화살표 함수 호출</button>
            <button onClick = { onClickFunc }>Func로 호출</button>
        </>
    );
}

export default OnClickEventHandler;



