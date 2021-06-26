import React, { useState } from "react";
import "../styles/Layout.css";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { submitForm } from "../store/actions/SubmitAction";

const Layout: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch<Dispatch>();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const submitFormButton = () => {
    const newForm = {
      name,
      surname,
      email,
      message,
    };
    if (name && surname && email && message !== "") {
      dispatch(submitForm(newForm));
      setName("");
      setEmail("");
      setSurname("");
      setMessage("");
      alert("Your message is arrived...");
    } else {
      alert("Please full fill all input out...");
    }
  };

  return (
    <div className="layout">
      <div className="layout__title">
        <h1>Contact Us</h1>
      </div>
      <div className="layout__form">
        <div className="layout__form__name">
          <TextField
            value={name}
            onChange={handleChangeName}
            label="Name"
            type="name"
            variant="outlined"
          />
          <TextField
            value={surname}
            onChange={handleChangeSurname}
            label="Surname"
            type="surname"
            variant="outlined"
          />
        </div>
        <TextField
          value={email}
          onChange={handleChangeEmail}
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          value={message}
          onChange={handleChangeMessage}
          label="Message"
          type="message"
          variant="outlined"
        />
        <Button
          onClick={submitFormButton}
          variant={"contained"}
          color={"primary"}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Layout;
