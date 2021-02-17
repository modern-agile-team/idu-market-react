import React, { useState } from 'react';
import '../../scss/LoginPage/Login.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const LoginComponent = (props) => {
    const [idValue, setIdValue] = useState('');
    const [pwdValue, setPwdValue] = useState('');

    const onIdChange = e => setIdValue(e.target.value);
    const onPwdChange = e => setPwdValue(e.target.value);

    const onSubmitHandler = e => {
        e.preventDefault();

        const body = {
            id: idValue,
            psword: pwdValue,
        }

        axios.post('/api/jwt', body)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);
                    window.localStorage.setItem('userID', body.id);
                    props.history.push('/');
                } else {
                    console.log(response.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section id="login-form" className="login-form">
            <div className="container">
                <form className="login-form">
                    <h1 className="login-title">LOGIN</h1>

                    <div className="text-field">
                        <input type="text" value={idValue} onChange={onIdChange} />
                        <span className={idValue ? "input-border" : ""}/>
                        <label className={idValue ? "fix" : ""}>ID</label>
                    </div>

                    <div className="text-field">
                        <input type="password" value={pwdValue} onChange={onPwdChange} />
                        <span className={pwdValue ? "input-border" : ""}/>
                        <label className={pwdValue ? "fix" : ""}>Password</label>
                    </div>

                    <div className="search">
                        <Link to="/">아이디/비밀번호 찾기</Link>
                    </div>

                    <input type="submit" value="Login" onClick={onSubmitHandler}/>

                    <div className="signup-link">
                        Not a Member? <Link to="/register">Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default withRouter(LoginComponent);