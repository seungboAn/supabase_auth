import React, { useState } from 'react';
import supabase from '../utils/supabaseClient';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            setMessage(error.message);
            setEmail('');
            setPassword('');
        }

        if (data) {
            setMessage('로그인이 완료되었습니다.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <br></br>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default SignIn;