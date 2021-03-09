import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h3>This is post details: {id}</h3>
            <h3>User Id: {post.id}</h3>
            <p>Post of Title: {post.title}</p>
            <p>Post of Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;