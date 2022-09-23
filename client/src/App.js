import React, { useEffect } from "react";
import { useState } from "react";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import { call } from "./services/ApiService";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [params, setParams] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    call("/contacts", "GET", null).then((res) => {
      setContacts(res.data);
    });
    console.log(contacts);
  }, []);

  const onDelete = (_id) => {
    call(`/contacts/${_id}`, "DELETE").then((res) => {
      console.log(res);
    });
    call("/contacts", "GET", null).then((res) => {
      setContacts(res.data);
    });
  };

  const add = (params) => {
    call("/contacts/add", "POST", params).then((res) => {
      console.log(res);
      setContacts(contacts.concat(res.data));
    });
  };

  const contactItems = contacts.map((contact, idx) => (
    <Contact contact={contact} key={idx} onDelete={onDelete} />
  ));

  return (
    <div>
      <Header />
      <Form add={add} />
      {/* <div>
        <h1>Add Contact Page</h1>

        <label htmlFor="name">NAME : </label>
        <input type="text" name="name" id="name" value={name}/>
        <label htmlFor="email">EMAIL : </label>
        <input type="text" name="email" id="email" value={email}/>
        <label htmlFor="phone">PHONE : </label>
        <input type="text" name="phone" id="phone" value={phone}/>
        <button className="submitBtn" onClick={onClick}>
          SUBMIT
        </button>
      </div> */}
      {contactItems}
    </div>
  );
};

export default App;
