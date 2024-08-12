// src/pages/Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">By {post.author}</p>
            <img src={post.featured_image} alt={post.title} className="w-full h-auto mb-6" />
            <div className="text-lg text-gray-800 mb-8">{post.content}</div>
            <hr className="mb-8" />
            <CommentSection comments={post.comments} />
        </div>
    );
};

export default Post;
