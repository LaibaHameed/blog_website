// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">MyBlog</Link>
                <nav>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/about" className="mr-4">About</Link>
                    <Link to="/create-post" className="mr-4">Create Post</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
