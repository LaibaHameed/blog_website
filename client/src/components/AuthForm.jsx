// src/components/AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle user authentication (register/login)
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">{type === 'register' ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full p-4 border rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium">Password</label>
                    <input
                        type="password"
                        className="w-full p-4 border rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default AuthForm;
