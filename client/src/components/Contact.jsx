import React, { useState } from "react";

const Contact = (props) => {
  const [contact, setContact] = useState(props.contact);
  const [readonly, setReadonly] = useState(true);
  const [editmode, setEditmode] = useState(false);
  const { remove, edit } = props;

  const deleteHandler = () => {
    remove(contact._id);
  };

  const onEditBtnClick = (e) => {
    if (!readonly) edit(contact);
    setReadonly(!readonly);
  };

  const onNameChange = (e) => {
    setContact({ ...contact, name: e.target.value });
  };
  const onEmailChange = (e) => {
    setContact({ ...contact, email: e.target.value });
  };
  const onPhoneChange = (e) => {
    setContact({ ...contact, phone: e.target.value });
  };

  return (
    <div className="contact">
      <input
        type="text"
        value={contact.name}
        readOnly={readonly}
        onChange={onNameChange}
      />
      <input
        type="text"
        value={contact.email}
        readOnly={readonly}
        onChange={onEmailChange}
      />
      <input
        type="text"
        value={contact.phone}
        readOnly={readonly}
        onChange={onPhoneChange}
      />
      <button onClick={deleteHandler}>DELETE</button>
      <button onClick={onEditBtnClick}>{readonly ? "EDIT" : "COMFIRM"}</button>
    </div>
  );
};

export default Contact;
