import React, {Component} from "react";

export class StateDescription extends Component {
    constructor() {
        super();
        this.state = {
            message: "state 개체를 사용하여 클래스 컴포넌트에서 상태 관리",
        };
    }

    render () {
        return (
            <>
                <h1>StateDescription</h1>
                <p>{this.state.message}</p>
                <button onClick={
                    () => {
                        window.alert('클릭 이벤트 발생!');
                    }
                }>클릭테스트~</button>
            </>
        );
    }
}
