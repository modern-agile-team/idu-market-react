import axios from 'axios';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/user_action';

const RegisterComponent = (props) => {
    const [idValue, setIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [pwdValue, setPwdValue] = useState('');
    const [pwdCheckValue, setPwdCheckValue] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const dispatch = useDispatch();

    const onIdChange = e => setIdValue(e.target.value);
    const onNameChange = e => setNameValue(e.target.value);
    const onEamilChange = e => setEmailValue(e.target.value);
    const onPwdChange = e => setPwdValue(e.target.value);
    const onPwdCheckChange = e => setPwdCheckValue(e.target.value);

    const onSubmitHandler = e => {
        e.preventDefault();

        let body = {
            id: idValue,
            name: nameValue,
            email: emailValue,
            psword: pwdValue
        };

        dispatch(registerUser(body))
            .then(response => {

                if (response.payload.success) {
                    console.log(response.payload.data);
                    props.history.push('/login');
                } else {
                    console.error('Fail to sign up');
                }
            })
            .catch(err => {
                const response = err.response;
                if (response.status === 409) {
                    setErrMsg(response.data.msg);
                }
                throw err;
            });

        // axios.post('/api/user', body)
        //     .then(response => {
        //         if (response.data.success) {
        //             console.log(response.data);
        //             props.history.push('/login');
        //         } else {
        //             console.error('error');
        //         }
        //     })
        //     .catch(err => {
        //         const response = err.response;
        //         if (response.status === 409) {
        //             setErrMsg(response.data.msg);
        //         }
        //         throw err;
        //     });
    }

    return (
        <section id="register" className="register">
        <div className="container">
            <form className="register-form">
                <h1 className="register-title">SignUp</h1>

                <div className="register-text-field">
                    <input type="text" value={idValue} onChange={onIdChange} />
                    <span className={idValue ? "input-border" : ""}/>
                    <label className={idValue ? "fix" : ""}>ID</label>
                </div>

                <div className="register-text-field">
                    <input type="text" value={nameValue} onChange={onNameChange} />
                    <span className={nameValue ? "input-border" : ""}/>
                    <label className={nameValue ? "fix" : ""}>Name</label>
                </div>

                <div className="register-text-field">
                    <input type="text" value={emailValue} onChange={onEamilChange} />
                    <span className={emailValue ? "input-border" : ""}/>
                    <label className={emailValue ? "fix" : ""}>Email</label>
                </div>

                <div className="register-text-field">
                    <input type="password" value={pwdValue} onChange={onPwdChange} />
                    <span className={pwdValue ? "input-border" : ""}/>
                    <label className={pwdValue ? "fix" : ""}>Password</label>
                </div>

                {/* <div className="register-text-field">
                    <input type="password" value={pwdCheckValue} onChange={onPwdCheckChange} />
                    <span className={pwdCheckValue ? "input-border" : ""}/>
                    <label className={pwdCheckValue ? "fix" : ""}>Confirm Password </label>
                </div> */}

                <p className="register-err">{errMsg}</p>

                <input type="submit" value="SignUp" onClick={onSubmitHandler}/>

                <div className="question">
                        <p>Do you have an account?</p>
                        <Link to="/login">Login</Link>
                </div>

                
            </form>
        </div>
    </section>
    );
};

export default withRouter(RegisterComponent);