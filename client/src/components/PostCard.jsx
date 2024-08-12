// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.featured_image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <Link to={`/post/${post.id}`} className="text-blue-500">Read more</Link>
            </div>
        </div>
    );
};

export default PostCard;
