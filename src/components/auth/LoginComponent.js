import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {LOGIN_REQUEST} from '../../redux/types'
// import { loginUser } from '../../actions/user_action';

const LoginComponent = (props) => {
    const [errMsg, setErrMsg] = useState('');
    const [formValues, setFormValues] = useState({
        id: "",
        psword: "",
    })

    const { errorMsg, isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        setErrMsg(errorMsg);
        if(isAuthenticated) props.history.push('/');

    }, [errorMsg, isAuthenticated]);

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

        dispatch({
            type: LOGIN_REQUEST,
            payload: body
        });      

        // dispatch(loginUser(body)) 
        //     .then(response => {
        //         if (response.payload.success) {
        //             console.log(response.payload);
        //             window.localStorage.setItem('userID', body.id);
        //             props.history.push('/');
        //         } else console.err('Fail to Login');
        //     })
        //     .catch(err => {
        //         const response = err.response;
        //         if (response.status === 400) setErrMsg(response.data.msg);
        //         throw err;
        //     })
    }

    return (
        <section id="form-template" className="form-template">
            <div className="container">
                <form className="form-field">
                    <h1 className="form-title">LOGIN</h1>

                    <div className="text-field">
                        <input type="text" name="id" onChange={onChange} className="input-text" />
                        <span className={formValues.id ? "input-border fill" : "input-border"} />
                        <label className={formValues.id ? "input-label fix" : "input-label"}>ID</label>
                    </div>

                    <div className="text-field">
                        <input type="password" name="psword" onChange={onChange} className="input-text" />
                        <span className={formValues.psword ? "input-border fill" : "input-border"}/>
                        <label className={formValues.psword ? "input-label fix" : "input-label"}>Password</label>

                    </div>

                    <p className="form-errmsg">{errMsg}</p>

                    <div className="form-search">
                        <p>
                            <Link to="/">아이디</Link><span> / </span>
                            <Link to="/">비밀번호</Link>
                            <span>찾기</span>
                        </p>
                    </div>

                    <input type="submit" value="Login" onClick={onSubmitHandler} className="form-submit"/>

                    <div className="form-signup-link">
                        Not a Member? <Link to="/register">Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default withRouter(LoginComponent);