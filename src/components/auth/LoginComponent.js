import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { LOADING_REQUEST, LOGIN_REQUEST } from "../../redux/types";

const LoginComponent = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formValues, setFormValues] = useState({
    id: "",
    psword: "",
  });

  const { loginErrorMsg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMsg(loginErrorMsg);
  }, [loginErrorMsg]);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    const { id, psword } = formValues;
    const body = { id, psword };

    e.preventDefault();

    dispatch({
      type: LOGIN_REQUEST,
      payload: body,
    });
  };

  return (
    <section id="form-template" className="form-template">
      <div className="container">
        <form className="form-field">
          <h1 className="form-title">LOGIN</h1>

          <div className="text-field">
            <input
              type="text"
              name="id"
              onChange={onChange}
              className="input-text"
              autoComplete="on"
            />
            <span
              className={formValues.id ? "input-border fill" : "input-border"}
            />
            <label
              className={formValues.id ? "input-label fix" : "input-label"}
            >
              ID
            </label>
          </div>

          <div className="text-field">
            <input
              type="password"
              name="psword"
              onChange={onChange}
              className="input-text"
              autoComplete="on"
            />
            <span
              className={
                formValues.psword ? "input-border fill" : "input-border"
              }
            />
            <label
              className={formValues.psword ? "input-label fix" : "input-label"}
            >
              Password
            </label>
          </div>

          <p className="form-errmsg">{errorMsg}</p>

          <div className="form-search">
            <p>
              <Link to="/findId">아이디</Link>
              <span> / </span>
              <Link to="/findPwd">비밀번호</Link>
              <span>찾기</span>
            </p>
          </div>

          <input
            type="submit"
            value="Login"
            onClick={onSubmitHandler}
            className="form-submit"
          />

          <div className="form-signup-link">
            Not a Member? <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default withRouter(LoginComponent);
