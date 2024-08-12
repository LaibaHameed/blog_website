// src/pages/Admin/CreatePost.jsx
import React, { useState } from 'react';

const CreatePost = ({ post = {}, onSave }) => {
    const [title, setTitle] = useState(post.title || '');
    const [content, setContent] = useState(post.content || '');
    const [featuredImage, setFeaturedImage] = useState(post.featured_image || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, content, featuredImage };
        // Call onSave with newPost
        onSave(newPost);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8">{post.id ? 'Edit Post' : 'Create New Post'}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-medium">Title</label>
                    <input
                        type="text"
                        className="w-full p-4 border rounded-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium">Content</label>
                    <textarea
                        className="w-full p-4 border rounded-lg"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="10"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-lg font-medium">Featured Image URL</label>
                    <input
                        type="text"
                        className="w-full p-4 border rounded-lg"
                        value={featuredImage}
                        onChange={(e) => setFeaturedImage(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-4 rounded">Save</button>
            </form>
        </div>
    );
};

export default CreatePost;
