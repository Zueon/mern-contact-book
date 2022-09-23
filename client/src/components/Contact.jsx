import React, { useState } from "react";

const Contact = (props) => {
  const [contact, setContact] = useState(props.contact);
  const { onDelete } = props;
  const deleteHandler = () => {
    onDelete(contact._id);
  };
  return (
    <div>
      <div className="contact">
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <button onClick={deleteHandler}>DELETE</button>
        <button>EDIT</button>
      </div>
    </div>
  );
};

export default Contact;
