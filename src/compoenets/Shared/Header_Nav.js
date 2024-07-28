import React, {Component} from "react";

export class Header_Nav extends Component {
    render () {
        return (
            <>
                <div>
                    Logo
                </div>
                <div>
                    <ul>
                        <li><a href="/">Main</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/OneWayBinding">OneWayBinding</a></li>
                        <li><a href="/ToDoListInMemory">ToDoListInMemory</a></li>
                        <li><a href="/NovelpiaBookList">NovelpiaBookList</a></li>

                    </ul>
                </div>
            </>
        );
    }
}