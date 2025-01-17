import React, {Component} from "react";

export class Copyright extends Component {
    render () {
        const date = new Date();
        const year = date.getFullYear();
        return (
            <div>
                Copyright &copy; 2023-{year} <em>ReactMemo</em> all right reserved.
            </div>
        );
    }
}