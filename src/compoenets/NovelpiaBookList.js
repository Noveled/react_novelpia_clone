import React from "react";
import image1 from '../images/cover01.png';
import image2 from '../images/cover02.png';
import image3 from '../images/cover03.png';


const bookList = [
    {id: 1, title: "여황제의 주인이 되었다.", author: "로한001", views: 1110, count: 250, isLike: false, cover: image1},
    {id: 2, title: "월천킥 작가가 될 거야!", author: "로한001", views: 435, count: 36, isLike: true, cover: image2},
    {id: 3, title: "이세계 TRPG 게임마스터", author: "1_394", views: 8970, count: 237, isLike: true, cover: image3},

];

function BookContent(props) {
    return (
            <div className="bookContent">
                <div className="bookContent-left">
                    <img src = {props.item.cover}></img>
                </div>
                <div className="bookContent-right">
                    <h4>{props.item.title}</h4>
                    <p>{props.item.author}</p>
                    <div className="bookContent-right-info">
                        <p>v : {props.item.views}</p>
                        <p>c : {props.item.count}</p>
                        <button onClick={() => props.addView(props.item.id)}>읽기</button>
                        </div>
                    <span>{props.item.isLike ? "좋아요" : "그냥그래요"}</span>
                    <button onClick={() => props.handleCheckedChange(props.item.id)}>좋아요</button>
                </div>
            </div>
    );
}


class NovelpiaBookList extends React.Component {
    constructor() {
        super();
        this.state = {
            books: bookList,
        };
        this.handleCheckedChange = this.handleCheckedChange.bind(this);
        this.addView = this.addView.bind(this);
    }
    handleCheckedChange(id) {
        this.setState(prev => {
            const modified = prev.books.map(book => {
                if (book.id === id) {
                    return { ...book, isLike: !book.isLike}
                }
                return book;
            });
            return {
                books: modified
            }
        });
    }
    addView(id) {
        this.setState(prev => {
            const modified = prev.books.map(book => {
                if (book.id === id) {
                    return { ...book, views: book.views + 1}
                }
                return book;
            });
            return {
                books: modified
            }
        });
    }

    
    render () {
        const books = this.state.books.map((book) => (
            <BookContent key={book.id} item={book} handleCheckedChange={this.handleCheckedChange} addView={this.addView}/>
        ));

        return(
            <>
                <h3>총 {bookList.length}개 작품</h3>
                <hr />
                {books}
            </>
        );
    }
}

export default NovelpiaBookList;