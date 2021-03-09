import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const handleButton = id => {
        const url = `post/${id}`
        history.push(url)
    }

    return (
        <div>
            <h3>This is post</h3>
            <h3>{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={() => handleButton(id)}> Click Details</button>
            {

            }
        </div>
    );
};

export default Post;