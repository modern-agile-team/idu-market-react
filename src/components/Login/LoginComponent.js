import React, { useState } from 'react';
import '../../scss/LoginPage/Login.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/user_action';

const LoginComponent = (props) => {
    const dispatch = useDispatch();
    const [idValue, setIdValue] = useState('');
    const [pwdValue, setPwdValue] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const onIdChange = e => setIdValue(e.target.value);
    const onPwdChange = e => setPwdValue(e.target.value);
    
    const onSubmitHandler = e => {
        e.preventDefault();

        let body = {
            id: idValue,
            psword: pwdValue,
        }

        dispatch(loginUser(body)) 
            .then(response => {
                console.log(response);

                if (response.payload.success) {
                    window.localStorage.setItem('userID', body.id);
                    props.history.push('/');
                } else {
                    console.err('error');
                }
            })
            .catch(err => {
                const response = err.response;
                if (response.status === 400) setErrMsg(response.data.msg);
                throw err;
            })
    }

    return (
        <section id="login" className="login">
            <div className="container">
                <form className="login-form">
                    <h1 className="login-title">LOGIN</h1>

                    <div className="login-text-field">
                        <input type="text" value={idValue} onChange={onIdChange} />
                        <span className={idValue ? "input-border" : ""}/>
                        <label className={idValue ? "fix" : ""}>ID</label>
                    </div>

                    <div className="login-text-field">
                        <input type="password" value={pwdValue} onChange={onPwdChange} />
                        <span className={pwdValue ? "input-border" : ""}/>
                        <label className={pwdValue ? "fix" : ""}>Password</label>
                    </div>

                    <p className="login-err">{errMsg}</p>

                    <div className="search">
                        <p>
                            <Link to="/">아이디</Link><p> / </p>
                            <Link to="/">비밀번호</Link>
                            <p>찾기</p>
                        </p>
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