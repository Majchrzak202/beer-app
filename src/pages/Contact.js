import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import useForm from "../components/hooks/useForm";

const Contact = () => {
  const {
    hasError: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
  } = useForm((enteredValue) => enteredValue.trim() !== "");

  const {
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
  } = useForm((enteredValue) => enteredValue.includes("@"));

  const navigate = useNavigate();

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

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
          <textarea className="textArea" />
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
