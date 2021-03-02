import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import { registerUser } from '../../actions/user_action';

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

        // dispatch(registerUser(body))
        //     .then(response => {
        //         if (response.payload.success) {
        //             console.log(response.payload);
        //             props.history.push('/login');
        //         } else console.error('Fail to sign up');
        //     })
        //     .catch(err => {
        //         const response = err.response;
        //         if (response.status === 409) setErrMsg(response.data.msg);
        //         throw err;
        //     });
    }

    return (
        <section id="form-template" className="form-template">
            <div className="container">
                <form className="form-field">
                    <h1 className="form-title">SignUp</h1>

                    <div className="text-field">
                        <input type="text" name="id" onChange={onChange} className="input-text" />
                        <span className={formValues.id ? "input-border fill" : "input-border"} />
                        <label className={formValues.id ? "input-label fix" : "input-label"}>ID</label>
                    </div>

                    <div className="text-field">
                        <input type="text" name="name" onChange={onChange} className="input-text" />
                        <span className={formValues.name ? "input-border fill" : "input-border"} />
                        <label className={formValues.name ? "input-label fix" : "input-label"}>Name</label>
                    </div>

                    <div className="text-field">
                        <input type="text" name="email" onChange={onChange} className="input-text" />
                        <span className={formValues.email ? "input-border fill" : "input-border"} />
                        <label className={formValues.email ? "input-label fix" : "input-label"}>Email</label>
                    </div>

                    <div className="text-field">
                        <input type="password" name="psword" onChange={onChange} className="input-text" />
                        <span className={formValues.psword ? "input-border fill" : "input-border"} />
                        <label className={formValues.psword ? "input-label fix" : "input-label"}>Password</label>
                    </div>

                    <p className="form-errmsg">{errMsg}</p>

                    <input type="submit" value="SignUp" onClick={onSubmitHandler} className="form-submit"/>

                    <div className="form-question">
                        <p>Do you have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default withRouter(RegisterComponent);