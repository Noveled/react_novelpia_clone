import React, {Component} from "react";

export class About extends Component {
    render () {
        const btnStyles = {
            color: 'white',
            backgroundColor: 'green',
            border: '1px solid red',
        }
        return (
            <>
                <h1>정보</h1>
                <p>...</p>
                <button style={btnStyles}>버튼에 스타일 적용하기</button>
            </>
        )
    }
}