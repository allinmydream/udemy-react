import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    const profileImg = faker.image.avatar();
    return (
        <div className="ui container comments">
            <CommentDetail author="judy" timeAgo="Today at 3:00PM" content="Good work" profileImg={faker.image.avatar()} />
            <CommentDetail author="noah" timeAgo="Today at 11:35AM" content="nice try!!" profileImg={faker.image.avatar()} />
            <CommentDetail author="sam" timeAgo="Yesterday at 10:05PM" content="Can I ask a question?" profileImg={faker.image.avatar()} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));