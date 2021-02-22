import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/user_action';

const LoginComponent = (props) => {
    const [errMsg, setErrMsg] = useState('');
    const [formValues, setFormValues] = useState({
        id: "",
        psword: "",
    })

    const dispatch = useDispatch();

    const onChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }
    
    const onSubmitHandler = e => {
        const {id, psword} = formValues;
        const body = { id, psword };

        e.preventDefault();

        dispatch(loginUser(body)) 
            .then(response => {
                if (response.payload.success) {
                    console.log(response.payload);
                    window.localStorage.setItem('userID', body.id);
                    props.history.push('/');
                } else console.err('Fail to Login');
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
                        <input type="text" name="id" onChange={onChange} />
                        <span className={formValues.id ? "input-border" : ""}/>
                        <label className={formValues.id ? "fix" : ""}>ID</label>
                    </div>

                    <div className="login-text-field">
                        <input type="password" name="psword" onChange={onChange} />
                        <span className={formValues.psword ? "input-border" : ""}/>
                        <label className={formValues.psword ? "fix" : ""}>Password</label>
                    </div>

                    <p className="login-err">{errMsg}</p>

                    <div className="search">
                        <p>
                            <Link to="/">아이디</Link><span> / </span>
                            <Link to="/">비밀번호</Link>
                            <span>찾기</span>
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