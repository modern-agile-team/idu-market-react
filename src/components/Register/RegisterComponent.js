import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/user_action';

const RegisterComponent = (props) => {
    const [errMsg, setErrMsg] = useState('');
    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        email: "",
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
        const {id, name, email, psword} = formValues;
        const body = { id, name, email, psword };

        e.preventDefault();

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    console.log(response.payload);
                    props.history.push('/login');
                } else console.error('Fail to sign up');
            })
            .catch(err => {
                const response = err.response;
                if (response.status === 409) setErrMsg(response.data.msg);
                throw err;
            });
    }

    return (
        <section id="register" className="register">
        <div className="container">
            <form className="register-form">
                <h1 className="register-title">SignUp</h1>

                <div className="register-text-field">
                    <input type="text" name="id" onChange={onChange} />
                    <span className={formValues.id ? "input-border" : ""}/>
                    <label className={formValues.id ? "fix" : ""}>ID</label>
                </div>

                <div className="register-text-field">
                    <input type="text" name="name" onChange={onChange} />
                    <span className={formValues.name ? "input-border" : ""}/>
                    <label className={formValues.name ? "fix" : ""}>Name</label>
                </div>

                <div className="register-text-field">
                    <input type="text" name="email" onChange={onChange} />
                    <span className={formValues.email ? "input-border" : ""}/>
                    <label className={formValues.email ? "fix" : ""}>Email</label>
                </div>

                <div className="register-text-field">
                    <input type="password" name="psword" onChange={onChange} />
                    <span className={formValues.psword ? "input-border" : ""}/>
                    <label className={formValues.psword ? "fix" : ""}>Password</label>
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