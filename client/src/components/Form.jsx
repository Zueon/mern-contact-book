import React, { useState } from "react";
import { call } from "../services/ApiService";

const Form = (props) => {
  // const [params, setParams] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { add } = props;

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    const params = {
      name,
      email,
      phone,
    };
    add(params);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h1>Add Contact Page</h1>

      <label htmlFor="name">NAME : </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="email">EMAIL : </label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={onEmailChange}
      />
      <label htmlFor="phone">PHONE : </label>
      <input
        type="text"
        name="phone"
        id="phone"
        value={phone}
        onChange={onPhoneChange}
      />
      <button className="submitBtn" onClick={onClick}>
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
