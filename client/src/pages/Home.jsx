// src/pages/Home.jsx
import React from 'react';
import PostCard from '../components/PostCard';

const Home = ({ posts }) => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Home;
