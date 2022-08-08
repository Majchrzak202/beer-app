import React, { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueInputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetForm = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueInputBlurHandler,
    resetForm,
  };
};

export default useForm;
