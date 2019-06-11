import React from 'react';

export default function Post(props) {
    var removePost = function() {
        props.onRemovePost(props.post);
    };
    
    return (
        <div>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <button onClick={removePost}>Remove</button>
        </div>
    )
}