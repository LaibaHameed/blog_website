// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import CreatePost from './pages/Admin/CreatePost';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<CreatePost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
