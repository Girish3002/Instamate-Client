import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACESS_TOKEN, setItem } from '../../utils/localStorageManager';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post("/auth/login", {
                email,
                password,
            });

            setItem(KEY_ACESS_TOKEN, response.result.acessToken);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login">
            <div className="login-box">
                <h1 className="heading">Instamate</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" className="submit" value="Log in" />
                </form>

                <div className="lines-text">
                    <span>OR</span>
                </div>

                <p className="bottom-heading">
                    Don't have an account?
                    <span>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;