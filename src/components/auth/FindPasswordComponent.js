import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const FindPasswordComponent = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formValues, setFormValues] = useState({
    id: "",
    email: "",
  });

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { id, email } = formValues;
    const body = { id, email };

    axios
      .post("/api/forgot-password", body)
      .then((response) => {
        if (response.data.success) {
          alert(response.data.msg);
          props.history.push("/login");
        }
      })
      .catch((err) => {
        const response = err.response;
        if (response.status === 400) {
          setErrorMsg(response.data.msg);
        }
        throw err;
      });
  };
  return (
    <section id="form-template" className="form-template">
      <div className="container">
        <form className="form-field">
          <h1 className="form-title">Find Password</h1>

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
              학번
            </label>
          </div>

          <div className="text-field">
            <input
              type="text"
              name="email"
              onChange={onChange}
              className="input-text"
              autoComplete="on"
            />
            <span
              className={
                formValues.email ? "input-border fill" : "input-border"
              }
            />
            <label
              className={formValues.email ? "input-label fix" : "input-label"}
            >
              이메일
            </label>
          </div>

          <p className="form-errmsg">{errorMsg}</p>

          <div className="form-search">
            <p>
              <Link to="/login">로그인</Link>
              <span> / </span>
              <Link to="/register">회원가입</Link>
            </p>
          </div>

          <input
            type="submit"
            value="Find ID"
            onClick={onSubmitHandler}
            className="form-submit"
          />
        </form>
      </div>
    </section>
  );
};

export default withRouter(FindPasswordComponent);
