import React from 'react';
import '../../scss/LoginPage/Login.scss';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return (
        <section id="login-form" className="login-form">
            <div className="container">
                <form action="post" className="login-form">
                    <h1 className="login-title">LOGIN</h1>

                    <div className="text-field">
                        <input type="text" />
                        <span></span>
                        <label>ID</label>
                    </div>

                    <div className="text-field">
                        <input type="password" />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <div className="search">
                        <Link to="/">아이디/비밀번호 찾기</Link>
                    </div>

                    <input type="submit" value="Login" />

                    <div className="signup-link">
                        Not a Member? <Link to="/register">Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginComponent;