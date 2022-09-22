import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { call } from "./services/ApiService";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    call("/contacts", "GET", null).then((res) => {
      setContacts(res.data);
    });
  }, []);

  // const addContact = () => {
  //   call("/contacts/add", "POST", )
  // };

  const contactItems = contacts.map((contact, idx) => (
    <div key={idx}>
      {contact.name}
      {contact.email}
      {contact.phone}
    </div>
  ));

  return (
    <div>
      <Home />
      <Form />
      {contactItems}
    </div>
  );
};

export default App;
