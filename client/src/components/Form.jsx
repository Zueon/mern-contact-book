import React from "react";
import { call } from "../services/ApiService";

const Form = () => {
  const onClick = (e) => {
    e.preventDefault();

    const frm = document.querySelector(".form");
    const name = frm.name.value;
    const email = frm.email.value;
    const phone = frm.phone.value;

    const params = {
      name,
      email,
      phone,
    };

    call("/contacts/add", "POST", params).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h1>Add Contact Page</h1>
      <form className="form">
        <label htmlFor="name">NAME : </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">EMAIL : </label>
        <input type="text" name="email" id="email" />
        <label htmlFor="phone">PHONE : </label>
        <input type="text" name="phone" id="phone" />
        <button className="submitBtn" onClick={onClick}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
