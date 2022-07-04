import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const navigate = useNavigate();

  const nameIsValid = name.length > 0;
  const emailIsValid = email.includes("@");

  const nameIsInvalid = !nameIsValid && nameIsTouched;
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    navigate("/thank");
  };

  const nameInputFormControl = nameIsInvalid
    ? "inputControlInvalid"
    : "inputControl";

  const emailInputFormControl = emailIsInvalid
    ? "inputControlInvalid"
    : "inputControl";

  return (
    <div className="form">
      <h3>This site is for educational purposes. Feel free to contact me! </h3>
      <form onSubmit={submitHandler}>
        <div className="fragment">
          <label>Name</label>
          <input
            className={nameInputFormControl}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            placeholder="name"
          />
           {nameIsInvalid && <p>Please provide a valid name!</p>}
        </div>
        <div className="fragment">
          <label>E-mail</label>
          <input
            className={emailInputFormControl}
            type="text"
            placeholder="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailIsInvalid && <p>Please provide a valid e-mail!</p>}
        </div>
        <div className="fragment">
          <label>Message</label>
          <textarea />
        </div>
        <div className="div-form-button">
          <button disabled={!formIsValid} className="contact-form-button">
            Contact!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
