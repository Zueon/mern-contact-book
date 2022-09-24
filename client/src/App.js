import React, { useEffect } from "react";
import { useState } from "react";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Header from "./components/Header";
import { call } from "./services/ApiService";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    call("/contacts", "GET", null).then((res) => {
      setContacts(res.data);
    });
  }, []);

  const remove = (_id) => {
    call(`/contacts/${_id}`, "DELETE").then((res) => {
      call("/contacts", "GET", null).then((res) => {
        setContacts(res.data);
      });
    });
  };

  const edit = (contact) => {
    call(`/contacts/${contact._id}`, "PUT", contact).then((res) => {
      console.log(res.data);
      console.log(contacts);
      contacts.forEach((contact) => {
        if (contact._id === res.data._id) {
          contact.name = res.data.name;
          contact.email = res.data.email;
          contact.phone = res.data.phone;
        }
      });
      setContacts(contacts);
    });
    // call("/contacts", "GET", null).then((res) => {
    //   setContacts(res.data);
    // });
  };

  const add = (params) => {
    call("/contacts/add", "POST", params).then((res) => {
      setContacts(contacts.concat(res.data));
    });
  };

  const contactItems = contacts.map((contact, idx) => (
    <Contact contact={contact} key={idx} remove={remove} edit={edit} />
  ));

  return (
    <div>
      <Header />
      <Form add={add} />

      {contactItems}
    </div>
  );
};

export default App;
