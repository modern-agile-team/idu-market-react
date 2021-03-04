import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { REGISTER_REQUEST } from '../../redux/types';

const RegisterComponent = (props) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [actionSubmit, setActionSubmit] = useState(false);
    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        email: "",
        psword: "",
    })

    const dispatch = useDispatch();
    const { registerErrorMsg, checkRegister } = useSelector(state => state.auth);

    useEffect(() => {
        setErrorMsg(registerErrorMsg);

        if (actionSubmit) {
            if (checkRegister) props.history.push('/login');
        }
    }, [checkRegister, registerErrorMsg, actionSubmit]);

    const onChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = e => {
        const {id, name, email, psword} = formValues;
        const body = { id, name, email, psword };

        e.preventDefault();
        setActionSubmit(true);

        dispatch({
            type: REGISTER_REQUEST,
            payload: body,
        });
    };

    return (
        <section id="form-template" className="form-template">
            <div className="container">
                <form className="form-field">
                    <h1 className="form-title">SignUp</h1>

                    <div className="text-field">
                        <input 
                            type="text" 
                            name="id" 
                            onChange={onChange} 
                            className="input-text"
                            autocomplete="off"
                         />
                        <span className={formValues.id ? "input-border fill" : "input-border"} />
                        <label className={formValues.id ? "input-label fix" : "input-label"}>ID</label>
                    </div>

                    <div className="text-field">
                        <input 
                            type="text" 
                            name="name" 
                            onChange={onChange} 
                            className="input-text" 
                            autocomplete="off"
                        />
                        <span className={formValues.name ? "input-border fill" : "input-border"} />
                        <label className={formValues.name ? "input-label fix" : "input-label"}>Name</label>
                    </div>

                    <div className="text-field">
                        <input 
                            type="text" 
                            name="email" 
                            onChange={onChange} 
                            className="input-text" 
                            autocomplete="off"
                        />
                        <span className={formValues.email ? "input-border fill" : "input-border"} />
                        <label className={formValues.email ? "input-label fix" : "input-label"}>Email</label>
                    </div>

                    <div className="text-field">
                        <input 
                            type="password" 
                            name="psword" 
                            onChange={onChange} 
                            className="input-text" 
                            autocomplete="off"
                        />
                        <span className={formValues.psword ? "input-border fill" : "input-border"} />
                        <label className={formValues.psword ? "input-label fix" : "input-label"}>Password</label>
                    </div>

                    <p className="form-errmsg">{errorMsg}</p>

                    <input type="submit" value="SignUp" onClick={onSubmitHandler} className="form-submit" />

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