import React from 'react';

const Test1 = (props) => {
    console.log(props);
    return (
        <div className="Test">
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}.{props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default Test1;