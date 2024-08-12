// src/components/CommentSection.jsx
import React, { useState } from 'react';

const CommentSection = ({ comments }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Handle comment submission
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="mb-6">
                <textarea
                    className="w-full p-4 border rounded-lg"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                ></textarea>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index} className="mb-4">
                        <p>{comment.content}</p>
                        <small className="text-gray-500">By {comment.author}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
