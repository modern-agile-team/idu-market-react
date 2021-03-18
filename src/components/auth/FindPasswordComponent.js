import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import { IoIosCheckmarkCircle } from "react-icons/io";

const FindPasswordComponent = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formValues, setFormValues] = useState({
    id: "",
    email: "",
  });
  const [modal, setModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

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

    console.log(body);
    setModalLoading(true);

    axios
      .post("/api/forgot-password", body)
      .then((response) => {
        if (response.data.success) {
          setModalLoading(false);
          setModal(true);
          console.log(response.data);
          setModalMsg(response.data.mag);
          setTimeout(() => {
            props.history.push("/login");
          }, 2500);
        }
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);
        if (response.status === 400) {
          setModalLoading(false);
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
              ID
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
              Email
            </label>
          </div>

          <p className="form-errmsg">{errorMsg}</p>

          <div className="form-search">
            <p>
              <Link to="/login">Login</Link>
              <span> / </span>
              <Link to="/register">Sign Up</Link>
            </p>
          </div>

          <input
            type="submit"
            value="Find ID"
            onClick={onSubmitHandler}
            className="form-submit"
          />
        </form>

        {modal ? (
          <div className="modal-wrapper">
            <div className="container">
              <IoIosCheckmarkCircle className="modal-icon" />
              <h2 className="modal-msg">{modalMsg}</h2>
            </div>
          </div>
        ) : (
          ""
        )}
        {modalLoading ? (
          <div className="modal-wrapper">
            <div className="container">
              <div className="loading" />
              <h2 className="modal-msg">Loading</h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default withRouter(FindPasswordComponent);
